const express = require("express");
const route = express.Router();
const homeController = require("../controller/homeController");
const registerController = require("../controller/registerController");
const loginController = require("../controller/loginController");
const resetController = require("../controller/resetController");

// Start page
route.get("/", homeController.showStart);
// logout
route.get("/logout", homeController.logout_get);

// register
route.get("/register", registerController.register_get);
route.post("/register", registerController.register_post);

// login
route.get("/login", loginController.login_get);
route.post("/login", loginController.login_post);

// reset password
route.get("/reset", resetController.reset_get);
route.post("/reset", resetController.reset_post);

//resetPasswordForm
route.get("/reset/:cryptoUrl", resetController.verifyCryptoUrl_get);
route.post("/resetPasswordForm", resetController.resetPasswordForm_post);

module.exports = route;
