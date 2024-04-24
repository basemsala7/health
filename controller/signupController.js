const userModle = require("../modules/user.js");
const connectDB = require("../utli/databaseConnection.js");
const { signupValidation } = require("../utli/validation.js");
const bcrypt = require("bcrypt");

module.exports = {
  post: async function (req, res) {
    try {
      const { name, email, password, gender, height, weight, target } =
        req.body;

      // body validation
      const { error } = signupValidation(req.body);
      if (error) {
        return res
          .status(400)
          .json({ message: "invalid", error: error.details[0].message });
      }

      await connectDB();
      const userExist = await userModle.find({ email });
      if (userExist.length != 0) {
        return res.status(403).json({ message: "email is already exist" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = new userModle({
        name,
        email,
        password: hashedPassword,
        gender,
        height,
        weight,
        target,
      });
      await user.save();
      res.status(200).json({ message: "Registration successful" });
    } catch (e) {
      return res.status(500).json(e);
    }
  },
};
