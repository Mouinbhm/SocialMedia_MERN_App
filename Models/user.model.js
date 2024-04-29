const mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  birthday: Date,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  bio: String,
  picture: String,
});

module.exports = mongoose.model("users", userSchema);
