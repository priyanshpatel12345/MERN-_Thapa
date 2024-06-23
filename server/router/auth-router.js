const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth-controller");
const { signupSchema, loginSchema } = require("../validator/auth-validator");
const validate = require("../middleware/validate-middleware");
const authMiddleware = require("../middleware/auth-middleware");

router.route("/").get(controller.home);

router.route("/register").post(validate(signupSchema), controller.register);

router.route("/login").post(validate(loginSchema), controller.login);

router.route("/user").get(authMiddleware, controller.user);

module.exports = router;
