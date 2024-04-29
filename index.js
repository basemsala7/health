const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const mongoose = require("mongoose");

const signupRoute = require("./routes/signupRoute.js");
const loginRoute = require("./routes/loginRoute.js");
const forgetpasswordRoute = require("./routes/forgetpasswordRoute.js");
const verifyOtpRoute = require("./routes/verifyOtpRoute.js");

const port = 8800;

app.get("/", function (req, res) {
  res.send("Hello World from app !");
});

app.use("/signup", signupRoute);
app.use("/login", loginRoute);
app.use("/gmail", forgetpasswordRoute);
app.use("/verify", verifyOtpRoute);
app.listen(port, (req, res) => {
  console.log(`app is running at port ${port}`);
});
