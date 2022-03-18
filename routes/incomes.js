const express = require("express");
const router = express.Router();
const controller = require("../controllers/incomesControl");
const Auth = require("../middleware/Auth");

router.get("/", Auth, controller.getIncomes);
router.post("/", Auth, controller.createIncome);
router.put("/:id", Auth, controller.updateIncome);
router.delete("/", Auth, controller.deleteIncome);

module.exports = router;
