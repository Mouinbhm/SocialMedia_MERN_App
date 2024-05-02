const user = require("../Models/user.model");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    bio: req.body.bio,
    picture: req.body.picture,
    birthday: req.body.birthday,
  };
  const User = new user(data);
  User.save()
    .then((createdUser) => {
      res.status(200).json({ message: "user created successfully" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Server error" });
    });
};
