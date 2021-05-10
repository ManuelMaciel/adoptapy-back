const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvitationSchema = new Schema({
  expireAt: {
    type: Date,
    default: Date.now,
    expires: 100,
    index: { expires: '1m' },
  },
  token: {
    type: String,
    unique: true
  },
  data: {
    to: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
});

const invitation = mongoose.model('Invitation', InvitationSchema);
module.exports = invitation;

