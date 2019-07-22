const express = require("express");
const router = express.Router();

const controller = require("./controller");
// router.get("/", controller.welcome);

router.post("/", controller.addNewComment)

router.get("/:id", controller.getUserComments)

module.exports = router;