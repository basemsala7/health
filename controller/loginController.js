const userModle = require("../modules/user");
const connectDB = require("../utli/databaseConnection.js");
const { loginValidation } = require("../utli/validation.js");
const generateToken = require("../utli/generateToken.js");

const bcrypt = require("bcrypt");

module.exports = {
  post: async function (req, res) {
    const body = req.body;

    const { error } = loginValidation(body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    await connectDB();
    const user = await userModle.findOne({ email: body.email });
    if (!user) {
      return res.status(403).json({ message: "user doesn't exist" });
    }

    bcrypt.compare(body.password, user.password, function (err, result) {
      // Password matched
      if (result) {
        console.log("Password verified");
        const { token, refreshToken } = generateToken(user);
        return res.status(200).json({ user, token, refreshToken });
      }
      // Password not matched
      else {
        console.log("Password not verified");
        return res.status(401).json({ message: "wrong password" });
      }
    });
  },
};
