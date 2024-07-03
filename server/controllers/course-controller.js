const Course = require("../models/course-model");

const courseController = async (req, res) => {
  try {
    const users = await Course.find({});

    if (!users || users === 0) {
      return res.status(404).json({ message: "No User Found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const createCourse = async (req, res) => {
  try {
    const response = req.body;
    await Course.create(response);

    res.status(200).json({ message: "Create SuccessFully!" });
  } catch (error) {
    return res.status(500).json({ message: "message not valid" });
  }
};

module.exports = { courseController, createCourse };
