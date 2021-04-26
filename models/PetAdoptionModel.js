const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetAdoptionSchema = new Schema({
  petName : {
    type: String,
    required: true
  },
  petSpecie: {
    type: String,
    required: true
  },
  petAge: {
    type: String,
    required: true
  },
  petSize: {
    type: String,
    required: true
  },
  petSex: {
    type: String,
    required: true
  },
  petBreed: {
    type: String,
    required: true
  },
  petDescription: {
    type: String,
    required: true
  },
  petLocation: {
    type: String,
    required: true
  },
  petPictures: {
    type: String,
    required: true
  },
  petOwner: {
    type: String,
    required: true
  },
  petContact: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const petAdoption = mongoose.model('PetAdoption', PetAdoptionSchema);
module.exports = petAdoption;