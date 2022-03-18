const express = require("express");
const router = express.Router();
const controller = require("../controllers/expensesControl");

router.get("/", controller.getExpense);
router.post("/", controller.createExpense);
router.put("/", controller.updateExpense);
router.delete("/", controller.deleteExpense);

module.exports = router;
