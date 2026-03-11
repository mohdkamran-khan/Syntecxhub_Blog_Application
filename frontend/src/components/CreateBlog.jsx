import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../store/BlogContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateBlog = () => {
  const { addBlog } = useContext(BlogContext);

  const titleRef = useRef();
  const [content, setContent] = useState("");
  const authorRef = useRef();
  const imageRef = useRef();

  const navigate = useNavigate();

  const handleCreateBlog = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", titleRef.current.value);
    formData.append("content", content);
    formData.append("author", authorRef.current.value);

    if (imageRef.current.files[0]) {
      formData.append("image", imageRef.current.files[0]);
    }

    fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resJson) => {
        addBlog(resJson.blog);

        titleRef.current.value = "";
        setContent("");
        authorRef.current.value = "";
        imageRef.current.value = "";

        navigate("/");
      });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Pour your heart out
      </h2>

      <form
        className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleCreateBlog}
      >
        <input
          type="text"
          placeholder="Title"
          ref={titleRef}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="bg-white"
        />

        <input
          type="text"
          placeholder="Author"
          ref={authorRef}
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="file"
          ref={imageRef}
          accept="image/*"
          className="p-2 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
        >
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
