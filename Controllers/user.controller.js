const User = require("../Models/user.model");

exports.signup = (req, res) => {
  const data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    bio: req.body.bio,
    picture: req.body.picture,
    birthday: req.body.birthday,
  };
  const _user = new User(data);
  _user
    .save()
    .then((createdUser) => {
      res.status(200).json({ message: "user created successfully" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Server error" });
    });
};
