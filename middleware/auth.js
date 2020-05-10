const jwt = require('jsonwebtoken');
const config = require('config');
const secret = config.get('jwtSecret');

//We add the auth middleware as a 2nd parameter to protected routes

//custom authentication without passport
module.exports = function(req, res, next) {
  //Get token from header
  const token = req.header('x-auth-token');
  //check if there's no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  //verify token
  try {
    const decoded = jwt.verify(token, secret);
    //req.user is set to the decoded user to be used in any of the protected routes
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
