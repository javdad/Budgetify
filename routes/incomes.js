const express = require("express");
const router = express.Router();
const controller = require("../controllers/incomesControl");

router.get("/", controller.getAllIncomes);
router.get("/:account", controller.getIncome);
router.post("/", controller.createIncome);
router.put("/:id", controller.updateIncome);
router.delete("/:id", controller.deleteIncome);

module.exports = router;
