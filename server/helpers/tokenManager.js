const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../secrets.config')

verifyToken = (req, res, next) => {
  jwt.verify(req.headers.token, function(err, decoded) {
    if (err) {
      res.status(401).send(err)
    } else {
      next()
    }
  })
}

signToken = (data) => {
  return jwt.sign(data, JWT_SECRET_KEY)
}

module.exports = {
  verifyToken,
  signToken
}
