const mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  date_of_birth: Date,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  bio: String,
  picture: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User; // Export User instead of user
