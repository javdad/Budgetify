const express = require("express");
const router = express.Router();
const controller = require("../controllers/userAccountsControl");
const Auth = require("../middleware/Auth");

router.get("/", Auth, controller.getAccounts);
router.post("/", Auth, controller.createAccount);
router.put("/", Auth, controller.updateAccount);
router.delete("/", Auth, controller.deleteAccount);

module.exports = router;
