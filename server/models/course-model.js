const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  uploadFile: {
    type: String,
  },
});

const Course = new mongoose.model("Course", courseSchema);

module.exports = Course;
