const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-users-controller");
const contactAdminController = require("../controllers/admin-service-controller");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");

router
  .route("/users")
  .get(authMiddleware, adminMiddleware, adminController.userAdmin);

router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, adminController.getUserById);

router
  .route("/users/update/:id")
  .patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router
  .route("/contact")
  .get(authMiddleware, adminMiddleware, contactAdminController.serviceAdmin);

router
  .route("/contact/delete/:id")
  .delete(
    authMiddleware,
    adminMiddleware,
    contactAdminController.deleteContactById
  );

router.route("/courses").get(adminController.getAllCourses);

router.route("/courses/:id").get(adminController.getCourseById);

router.route("/courses/update/:id").patch(adminController.updateCourseById);

router.route("/courses/delete/:id").delete(adminController.deleteCourseById);

module.exports = router;
