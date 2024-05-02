const user = require("../Models/user.model");

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
  const User = new user(data); // Use User instead of user
  User.save()
    .then((createdUser) => {
      res.status(200).json({ message: "user created successfully" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Server error" });
    });
};
