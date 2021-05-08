const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetLostSchema = new Schema({
  petName : {
    type: String,
    required: true
  },
  petSpecie: {
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
  petCity: {
    type: String,
    required: true
  },
  petLocation: {
    latitude: {
      type: Number,
      default: 55.1,
      required: true
    },
    longitude: {
      type: Number,
      default: -0.91,
      required: true
    }
  },
  petPictures: [
    {
      type: String,
      required: true
    }
  ],
  petContact: {
    name: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const petLost = mongoose.model('PetLost', PetLostSchema);
module.exports = petLost;