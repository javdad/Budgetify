const express = require("express");
const router = express.Router();
const passport = require("passport");
const controller = require("../controllers/usersControl");
const Auth = require("../middleware/Auth");

const auth = passport.authenticate("jwt", { session: false });

router.get("/", Auth, controller.getAccount);
router.put("/", Auth, controller.updateAccount);
router.delete("/", Auth, controller.deleteAccount);

module.exports = router;
