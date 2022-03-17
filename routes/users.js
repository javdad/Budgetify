const express = require("express");
const router = express.Router();
const controller = require("../controllers/usersControl");

router.get("/", controller.getAccount);
router.put("/:email", controller.updateAccount);
router.delete("/:email", controller.deleteAccount);

module.exports = router;
