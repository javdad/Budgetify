const express = require("express");
const router = express.Router();
const controller = require("../controllers/authControl");
const isAdmin = require("../middleware/isAdmin");

router.post("/register", isAdmin, controller.registerUsers);
router.post("/login", controller.loginUser);
router.post("/logout", controller.logoutUser);

module.exports = router;
