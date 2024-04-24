const mongoose = require("mongoose");

const uri =
  "mongodb+srv://basem:Basem.s123@cluster0.qo2pnn4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;
