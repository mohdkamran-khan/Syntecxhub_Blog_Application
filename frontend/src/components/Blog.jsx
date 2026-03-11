import { useContext, useState } from "react";
import formatDate from "../utils/dateUtil";
import CommentForm from "./CommentForm";
import { BlogContext } from "../store/BlogContext";

const Blog = ({ blog }) => {
  const { updateBlog, deleteBlog } = useContext(BlogContext);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [author, setAuthor] = useState(blog.author);
  const [image, setImage] = useState(null);

  const handleLike = () => {
    fetch(`http://localhost:3000/api/blogs/${blog._id}/like`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((resJson) => updateBlog(resJson.blog));
  };

  const handleDelete = () => {
    fetch(`http://localhost:3000/api/blogs/${blog._id}`, {
      method: "DELETE",
    }).then(() => deleteBlog(blog._id));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", author);

    if (image) formData.append("image", image);

    fetch(`http://localhost:3000/api/blogs/${blog._id}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => res.json())
      .then((resJson) => {
        updateBlog(resJson.blog);
        setIsEditing(false);
      });
  };

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm hover:shadow-md transition m-4">
      {/* Cover Image */}
      {blog.image && (
        <img
          src={`http://localhost:3000/uploads/${blog.image}`}
          alt={blog.title}
          className="w-full h-70 object-fit rounded-t-xl"
        />
      )}

      <div className="p-6">
        {isEditing ? (
          <form onSubmit={handleUpdate} className="flex flex-col gap-4">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-3 rounded-md"
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="6"
              className="border p-3 rounded-md"
            />

            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border p-3 rounded-md"
            />

            <input type="file" onChange={(e) => setImage(e.target.files[0])} />

            <div className="flex gap-3">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                Save
              </button>

              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>
            {/* Author Row */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
                  {blog.author.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="text-sm font-medium">{blog.author}</p>
                  <p className="text-xs text-gray-500">
                    {formatDate(blog.createdAt)}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleLike}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm"
                >
                  👍 {blog.likes}
                </button>

                <button
                  onClick={() => setIsEditing(true)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-md text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={handleDelete}
                  className="px-3 py-1 bg-red-500 text-white rounded-md text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            {/* Content */}
            <div
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
            {/* leading-relaxed text-lg mb-8 */}
            {/* Comments */}
            <section className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-5">
                Comments ({blog.comments.length})
              </h2>

              <div className="space-y-4">
                {blog.comments.map((comment) => (
                  <div
                    key={comment._id}
                    className="flex gap-3 bg-gray-50 p-4 rounded-lg"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
                      {comment.username.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <div className="flex gap-2 items-center text-sm">
                        <span className="font-medium">{comment.username}</span>

                        <span className="text-gray-500 text-xs">
                          {formatDate(comment.createdAt)}
                        </span>
                      </div>

                      <p className="text-gray-700 text-sm mt-1">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <CommentForm blogId={blog._id} />
              </div>
            </section>
          </>
        )}
      </div>
    </article>
  );
};

export default Blog;
