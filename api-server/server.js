const express = require('express');
const router = express.Router();

const profile = require("./profile");
router.use("/profile", profile);

const connection = require("./connection");
router.use("/connection", connection);

module.exports = router;