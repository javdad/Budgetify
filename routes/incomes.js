const express = require("express");
const router = express.Router();
const controller = require("../controllers/incomesControl");
const Auth = require("../middleware/Auth");

router.get("/", Auth, controller.getIncomes);
router.post("/", Auth, controller.createIncome);
router.put("/:_id", Auth, controller.updateIncome);
router.delete("/:_id", Auth, controller.deleteIncome);

module.exports = router;
