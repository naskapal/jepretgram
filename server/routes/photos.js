const router = require('express').Router()
const Photos = require('../controllers/photoController');

router.get('/', Photos.getAll)

module.exports = router
