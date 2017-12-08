const User = require('../models/userModel')
const encrypt = require('../helpers/encrypt')
const tokenManager = require('../helpers/tokenManager')

const register = (req, res) => {
  
  encrypt.hash(req.body.password, (err, result) => {
    if (err) {
      res.status(500).send({
        err: err
      })
    } else {
      let user = new User({
        username: req.body.username,
        password: result
      })
      user.save()
      .then(success => res.status(200).send(success))
      .catch(error => res.status(500).send(error))
    }
  })
  
}

const login = (req, res) => {
  User.findOne({username: req.body.username})
    .then(user => {
      encrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          console.log(err)
          res.status(500).send({
            msg: err
          })
        } else {
          res.status(200).send({
            token: tokenManager.signToken(user.username)
          })
        }
      })
    })
    .catch(error =>  {
      console.log(error)
      res.status(500).send({
        error: error
      })
    })
}

module.exports = {
  register,
  login
}
