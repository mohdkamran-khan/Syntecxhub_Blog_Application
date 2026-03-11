require("dotenv").config();

// External Module
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Local Module
const blogRouter = require("./routers/blogRouter");
const errorController = require("./controllers/errorController");
const app = express();

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/api", blogRouter);
app.use(errorController.get404);
console.log(process.env.MONGO_DB_URL);
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});
