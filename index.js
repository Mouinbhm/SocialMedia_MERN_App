const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("Connected to MongoDB on " + db.host + "/" + db.name);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
