const express = require("express");
const login = express.Router();
const controller = require("../controller/loginController.js");

login.post("/", controller.post);

module.exports = login;
