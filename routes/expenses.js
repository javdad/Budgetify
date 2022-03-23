const express = require("express");
const router = express.Router();
const controller = require("../controllers/expensesControl");
const Auth = require("../middleware/Auth");

router.get("/", Auth, controller.getExpense);
router.post("/", Auth, controller.createExpense);
router.put("/", Auth, controller.updateExpense);
router.delete("/", Auth, controller.deleteExpense);

module.exports = router;
