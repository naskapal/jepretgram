const {CLOUD_BUCKET, GCLOUD_PROJECT, KEYFILE_PATH} = require ('../secrets.config')
      Multer  = require('multer')
      multer = Multer({
        storage: Multer.MemoryStorage
      })
      Storage = require('@google-cloud/storage')
      
const storage = Storage({
  projectId: GCLOUD_PROJECT,
  keyFilename: KEYFILE_PATH
})

const getPublicUrl = (filename) => {
  return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`
}

const bucket = storage.bucket(CLOUD_BUCKET)
      
const savePhoto = (req, res, next) => {
  if (!req.file) {
    return next()
  }

  const gcsname = Date.now() + req.file.originalname
  const file = bucket.file(gcsname)

  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  })

  stream.on('error', (err) => {
    req.file.cloudStorageError = err
    next(err)
  })

  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname
    file.makePublic().then(() => {
      req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
      next()
    })
  })

  stream.end(req.file.buffer)
}

module.exports = {
  savePhoto,
  multer
}
