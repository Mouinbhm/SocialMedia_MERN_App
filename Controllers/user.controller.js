const user = require("../Models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await user.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({ message: "Email invalide" });
    }
    bcrypt.compare(password, existingUser.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: "Erreur du serveur" });
      }
      if (!isMatch) {
        return res.status(400).json({ message: "Mot de passe incorrect" });
      }
      const token = jwt.sign(
        { data: { id: existingUser.id, role: existingUser.role } },
        process.env.CLE,
        { expiresIn: "1h" }
      );
      return res.status(200).json({
        message: "Connexion réussie",
        token: token,
        user: existingUser,
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur du serveur" });
  }
};
