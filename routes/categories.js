const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoriesControl");
const Auth = require("../middleware/Auth");

router.get("/", Auth, controller.getCategory);
router.post("/", Auth, controller.createCategory);
router.put("/:_id", Auth, controller.updateCategory);
router.delete("/:_id", Auth, controller.deleteCategory);

module.exports = router;
