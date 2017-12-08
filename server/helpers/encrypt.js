const bcrypt = require('bcrypt');

const hash = function (plaintext, cb) {
  bcrypt.hash(plaintext, 10)
    .then(encryptedpass => cb(null, encryptedpass))
    .catch(error => cb(error, null))
}

const compare = function (plaintext, hashedPassword, cb) {
  bcrypt.compare(plaintext, hashedPassword)
    .then(correct => cb(null, correct))
    .catch(error => cb(error, null))
}

module.exports = {
  hash,
  compare
}
