const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetAdoptionSchema = new Schema({
  petName : {
    type: String
  },
  petSpecie: {
    type: String
  },
  petAge: {
    type: String
  },
  petSize: {
    type: String
  },
  petSex: {
    type: String
  },
  petBreed: {
    type: String
  },
  petDescription: {
    type: String
  },
  petLocation: {
    type: String
  },
  petPictures: {
    type: String
  },
  petOwner: {
    type: String
  },
  petContact: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const petAdoption = mongoose.model('PetAdoption', PetAdoptionSchema);
module.exports = petAdoption;