const express = require("express");
const router = express.Router();
const courseControl = require("../controllers/course-controller");

router.route("/course").get(courseControl.courseController);
router.route("/insert").post(courseControl.createCourse);

module.exports = router;
