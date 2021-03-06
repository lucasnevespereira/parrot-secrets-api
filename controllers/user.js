const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });

      user
        .save()
        .then(() => res.status(201).json({ message: 'User created' }))
        .catch((err) => res.status(400).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
};

exports.login = (req, res, next) => {
  let fecthedUser;
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
      fecthedUser = user;
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ message: 'Password incorrect' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ email: user.email, userId: user._id }, 'RANDOM_TOKEN_SECRET'),
            expiresIn: 3600
          });
        })
        .catch((err) => res.status(500).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
};

exports.deleteAccount = (req, res) => {
    User.findByIdAndDelete(req.params.userId)
        .then(() => res.status(200).json({message: "User Deleted"}))
        .catch(err => res.status(404).json({err}));
}
