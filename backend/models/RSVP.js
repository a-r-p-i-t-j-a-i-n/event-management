const mongoose = require('mongoose');

const rsvpSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['yes', 'no', 'maybe'], required: true },
});

module.exports = mongoose.model('RSVP', rsvpSchema);
