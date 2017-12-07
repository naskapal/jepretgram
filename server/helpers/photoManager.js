const Multer  = require('multer')
      multer = Multer({ dest: 'uploads/' })
      
      
const savePhoto = (req, res, next) => {
  if (!req.file) {
    res.send({
      msg: "no photo found"
    })
  } else {
    req.body.filename = Date.now() + '_' +  req.file.originalname
    next()
  }
}

module.exports = {
  savePhoto,
  multer
}
