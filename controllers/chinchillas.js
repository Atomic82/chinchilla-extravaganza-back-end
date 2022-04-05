import { Chinchilla } from '../models/chinchilla.js'


function index (req, res) {
  Chinchilla.find({})
  .populate('owner')
  .then(chinchillas => {
    console.log('all chinchillas', chinchillas)
    res.json(chinchillas)
  })
  .catch(err => {
    res.json(err)
  })
}


function create(req, res) {
  req.body.owner = req.user.profile
  Chinchilla.create(req.body)
  .then(chinchilla => {
    chinchilla.populate('owner')
    .then(populatedChinchilla => {
    res.json(populatedChinchilla)
    })    
  })
  .catch(err => res.json(err))
}

function deleteChinchilla(req, res) {
  Chinchilla.findByIdAndDelete(req.params.id)
  .then(chinchilla => res.json(chinchilla))
  .catch(err => res.json(err))
}

function update(req, res) {
  Chinchilla.findByIdAndUpdate(req.params.id, req.body,
    {new: true})
  .then(chinchilla => res.json(chinchilla))
  .catch(err => res.json(err))
}

function show(req, res) {
  Chinchilla.findById(req.params.id)
  .then(chinchilla => res.json(chinchilla))
  .catch(err => res.json(err))
}

export {
  index,
  create,
  update, 
  deleteChinchilla as delete,
  show
}

//test
