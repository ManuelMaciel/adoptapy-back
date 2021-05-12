const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// mongoose paginate v2
const mongoosePaginate = require('mongoose-paginate-v2');

const PetAdoptionSchema = new Schema({
  petData: {
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
  },
  expireAt: {
    type: Date,
    default: Date.now,
    index: { expires: '86400m' }, //expires in 60 days
  }
});

PetAdoptionSchema.plugin(mongoosePaginate)

const petAdoption = mongoose.model('PetAdoption', PetAdoptionSchema);
module.exports = petAdoption;