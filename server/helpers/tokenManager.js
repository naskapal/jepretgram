const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../secrets.config')

verify = (req, res, next) => {
  jwt.verify(req.headers.token, function(err, decoded) {
    if (err) {
      res.status(401).send(err)
    } else {
      next()
    }
  })
}

// sign = (data)

module.exports = {
  
}
