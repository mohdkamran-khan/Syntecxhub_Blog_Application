const express = require("express");
const blogController = require("../controllers/blogController");
const blogRouter = express.Router();
const upload = require("../middleware/upload");

blogRouter.get("/blogs", blogController.getBlogs);
blogRouter.post("/blogs", upload.single("image"), blogController.createBlog);
blogRouter.put("/blogs/:id", upload.single("image"), blogController.editBlog);
blogRouter.delete("/blogs/:id", blogController.deleteBlog);
blogRouter.put("/blogs/:id/like", blogController.likeBlog);
blogRouter.put("/blogs/:id/comment", blogController.commentBlog);

module.exports = blogRouter;
