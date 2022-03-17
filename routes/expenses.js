const express = require("express");
const router = express.Router();
const controller = require("../controllers/expensesControl");

router.get("/", controller.getAllExpenses);
router.get("/:account", controller.getExpense);
router.post("/", controller.createExpense);
router.put("/:id", controller.updateExpense);
router.delete("/:id", controller.deleteExpense);

module.exports = router;
