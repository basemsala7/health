const express = require("express");
const verify = express.Router();
const controller = require("../controller/verifyOtpController.js");

verify.post("/", controller.post);

module.exports = verify;
