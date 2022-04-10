const express = require("express");
const router = express.Router();
const controller = require("../controllers/transactionsControl");
const Auth = require("../middleware/Auth");

router.get("/", Auth, controller.getTransactions);
router.post("/", Auth, controller.createTransaction);
router.put("/:_id", Auth, controller.updateTransaction);
router.delete("/:_id", Auth, controller.deleteTransaction);

module.exports = router;
