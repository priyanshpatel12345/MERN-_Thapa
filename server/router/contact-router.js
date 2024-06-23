const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-contoller");

router.route("/form").post(contactForm);

module.exports = router;
