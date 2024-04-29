const nodemailer = require("nodemailer");
const mailFunction = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "basembebo809@gmail.com",
      pass: "qwdsdkyjboqjxybh",
    },
  });
  const options = {
    from: "basembebo809@gmail.com",
    to: email,
    subject: "OTP Code ", // Subject line
    text: `OTP : ${otp}`, // plain text body
  };
  const info = await transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log(error);
      return error;
    } else {
      console.log("Email sent: " + info.response);
      return info.response;
    }
  });
};
module.exports = mailFunction;
