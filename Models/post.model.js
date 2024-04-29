const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: string,
  description: string,
  media: [],
  creature: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

module.exports = mongoose.model("post", postSchema);
