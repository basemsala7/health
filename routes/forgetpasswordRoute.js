const express = require("express");
const forgetpassword = express.Router();
const controller = require("../controller/forgetpasswordController.js");

forgetpassword.post("/", controller.post);

module.exports = forgetpassword;
