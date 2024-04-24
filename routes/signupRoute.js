const express = require("express");
const signup = express.Router();

const controller = require("../controller/signupController.js");

signup.post("/", controller.post);

module.exports = signup;
