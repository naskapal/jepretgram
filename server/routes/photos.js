const router = require('express').Router()
      Photos = require('../controllers/photoController')
      PhotoUpload = require('../helpers/photoManager')

router.get('/', Photos.findAll)
router.post('/', PhotoUpload.multer.single('photo'), PhotoUpload.savePhoto, Photos.create)
router.get('/:id', Photos.findByOwner)
router.put('/:id', Photos.editCaption)
router.delete('/:id', Photos.destroy)

module.exports = router
