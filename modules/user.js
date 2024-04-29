const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    name: { type: String, min: 3, max: 16, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, min: 8, max: 16, required: true },
    gender: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    target: { type: String, required: true },
    otp: { type: Number },
  },
  { timestamps: true }
);
const userModle = mongoose.model("Users", usersSchema);
module.exports = userModle;
