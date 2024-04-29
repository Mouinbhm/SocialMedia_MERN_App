const User = required("../Models/user.model");
exports.signup = (req, res) => {
  const data = {
    firstname: "ahmed",
    lastname: "ben ahmed",
    email: "ahmed@gmail.com",
    password: "123456",
    bio: "",
    picture: "",
    birthday: new Date(),
  };
  const_user = new User(data);
  _user
    .save()
    .then((createdUser) => {
      res.status(200).json({ message: "user created successfully" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Server error" });
    });
};
