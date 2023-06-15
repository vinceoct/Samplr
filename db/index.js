const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vinceoct:suYd-MS46mfxj-6@cluster0.uwehy4s.mongodb.net/"
  )
  .then(() => {
    console.log("Successfully connected to mongoDB");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
