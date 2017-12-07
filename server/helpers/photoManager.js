const Multer  = require('multer')
      multer = Multer({ dest: 'uploads/' })
      
      
const savePhoto = (req, res, next) => {
  if (!req.file) {
    res.send({
      msg: "no photo found"
    })
  } else {
    req.file = Date.now() + req.file.originalname
    next()
  }
}

module.exports = {
  savePhoto,
  multer
}
