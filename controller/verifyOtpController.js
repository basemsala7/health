const userModle = require("../modules/user");
const connectDB = require("../utli/databaseConnection.js");

module.exports = {
  post: async function (req, res) {
    const otp = req.body.otp;
    if (!otp) {
      return res.status(400).json({ message: "Bad request try again" });
    }
    await connectDB();
    const user = await userModle.findOne({ otp });
    if (!user) {
      return res.status(403).json({ message: "Wrong OTP try again " });
    } else {
      return res.status(200).json({ message: "Correct otp " });
    }
  },
};
