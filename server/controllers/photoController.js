const Photo = require('../models/photoModel')

const findAll = (req, res) => {
  Photo.find()
    .then(photos => res.status(200).send(photos))
    .catch(error => res.status(500).send(error))
}

const create = (req, res) => {
  let photo = new Photo ({
    author: req.body.author,
    path: req.body.filename,
    caption: req.body.caption
  })
  
  photo.save()
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
}

const findByOwner = (req, res) => {
  Photo.find({
    author: req.params.id
  })
    .then(photos => res.status(200).send(photos))
    .catch(error => res.status(500).send(error))
}

const editCaption = (req, res) => {
  Photo.findByIdAndUpdate(req.params.id, {
    caption: req.body.caption
  }, {
    new: true
  })
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
}

const destroy = (req, res) => {
  Photo.findByIdAndRemove(req.params.id)
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
}

const getLikes = (req, res) => {
  Photo.findById(req.params.id)
    .then(photo => res.status(200).send({
      likes: photo.likes
    }))
    .catch(error => res.status(500).send(error))
}

const sendLike = (req, res) => {
  Photo.findByIdAndUpdate(req.params.id)
    .then(photo => {
      photo.likes.push(req.body.userId)
      res.status(200).send({
        likes: photo.likes
      })
    })
    .catch(error => res.status(500).send(error))
}

module.exports = {
  findAll,
  create,
  findByOwner,
  editCaption,
  destroy
}
