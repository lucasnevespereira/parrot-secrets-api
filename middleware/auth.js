const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split('')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userID = decodedToken.userID;
    if (req.body.userID && req.body.userID !== userID) {
      throw 'User ID not valid!';
    } else {
      next();
    }
  } catch (err) {
    res.status(401).json({ error: err | 'Request non authorized' });
  }
};
