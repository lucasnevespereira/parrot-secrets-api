const Secret = require('../models/secret');

exports.getAllSecrets = (req, res, next) => {
  Secret.find()
    .then((secrets) => res.status(200).json(secrets))
    .catch((err) => res.status(400).json({ err }));
};

exports.createSecret = (req, res, next) => {
  console.log(req.body);
  delete req.body._id;
  const secret = new Secret({
    content: req.body.content,
    creator: req.userData.userId,
    createdAt: req.body.createdAt
  });
  
  secret
    .save()
    .then(() => res.status(201).json({ message: 'Secret was created' }))
    .catch((err) => res.status(400).json({ err }));
};

exports.getOneSecret = (req, res, next) => {
  Secret.findOne({ _id: req.params.id })
    .then((secret) => res.status(200).json({ secret }))
    .catch((err) => res.status(404).json({ err }));
};

exports.updateSecret = (req, res, next) => {
  Secret.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Secret updated' }))
    .catch((err) => res.status(400).json({ err }));
};

exports.deleteSecret = (req, res, next) => {
  Secret.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Secret Deleted' }))
    .catch((err) => res.status(400).json({ err }));
};
