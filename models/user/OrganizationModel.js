//Organizations model
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema(
  {
    name: { 
      type: String,
      required: true 
    },
    email: { 
      type: String,
      required: true 
    },
    password: { 
      type: String, 
      required: true 
    },
    phone: { 
      type: String,
      required: true
    },
    ownerName: { 
      type: String,
      required: true 
    },
    address: {
      street: { 
        type: String 
      },
      city: { 
        type: String
      }
    },
    location: {
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
    social: {
      facebook: { 
        type: Boolean 
      },
      instagram: { 
        type: Boolean 
      },
      twitter: { 
        type: Boolean 
      },
      website: { 
        type: Boolean 
      }
    },
    donations: {
      bankTransfers: {
        holder: {
          type: String,
          required: true
        },
        savingBank: {
          type: String,
          required: true
        },
        bankName: {
          type: String,
          required: true,
        },
        ruc: {
          type: String,
          required: true
        }
      },
      otherMethods: {
        tigo: {
          type: Number
        },
        personal: {
          type: Number
        },
        claro: {
          type: Number
        }
      }
    },
    description: { 
      type: String,
      required: true 
    },
});

const organization = mongoose.model('Organization', OrganizationSchema)
module.exports = organization;