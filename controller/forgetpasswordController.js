const userModle = require("../modules/user");
const connectDB = require("../utli/databaseConnection.js");
const mailFunction = require("../utli/sendmail");
const { forgrtpasswordValidation } = require("../utli/validation.js");
module.exports = {
  post: async function (req, res) {
    const { email } = req.body;
    const { error } = forgrtpasswordValidation({ email });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    await connectDB();
    const user = await userModle.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: "user doesn't exist" });
    }
    const otp = Math.floor(1000 + Math.random() * 9000);
    await mailFunction(email, otp);
    const updated = await userModle.findOneAndUpdate({ email }, { otp });
    return res.status(200).json({ message: "done" });
  },
};
