import mongoose from "mongoose";

const Schema = mongoose.Schema

const chinchillaSchema = new Schema({
  name: {type: String, required: true},
  breed: {type: String, default: 'Mixed'}, 
  age: {type: Number, default: 0},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"}
  photo: {type: String}
}, {
  timestamps: true
})

const Chinchilla = mongoose.model('Chinchilla', chinchillaSchema)

export {Chinchilla} 