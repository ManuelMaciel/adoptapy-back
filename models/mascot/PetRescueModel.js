const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetRescueSchema = new Schema({
  petData:{
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
        type: Object,
        required: true
      }
    ]
  },
  postCreator:{
    type: Schema.ObjectId,
    ref: 'Organization'
  },
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

const petRescue = mongoose.model('PetRescue', PetRescueSchema);
module.exports = petRescue;