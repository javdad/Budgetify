const express = require("express");
const router = express.Router();
const controller = require("../controllers/userAccountsControl");

router.get("/", controller.getAllAccounts);
router.get("/:account", controller.getAccount);
router.post("/", controller.createAccount);
router.put("/:id", controller.updateAccount);
router.delete("/:id", controller.deleteAccount);

module.exports = router;
