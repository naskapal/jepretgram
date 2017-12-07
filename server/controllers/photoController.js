const Photo = require('../models/photoModel')

const findAll = (req, res) => {
  Photo.find()
    .then(photos => res.status(200).send(photos))
    .catch(error => res.status(500).send(error))
}

const create = (req, res) => {
  let photo = new Photo ({
    author: req.body.author,
    // path: path di lokal nanti
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
  })
}

const destroy = (req, res) => {
  Photo.remove({
    id: req.params.id
  })
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
}

module.exports = {
  findAll,
  create,
  findByOwner,
  editCaption,
  destroy
}
