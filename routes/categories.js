const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoriesControl");
const Auth = require("../middleware/Auth");

router.get("/", Auth, controller.getCategory);
router.post("/", Auth, controller.createCategory);
router.put("/", Auth, controller.updateCategory);
router.delete("/", Auth, controller.deleteCategory);

module.exports = router;
