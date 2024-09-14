const RSVP = require('../models/RSVP');
const Event = require('../models/Event');

// RSVP to an event
const rsvpToEvent = async (req, res) => {
  const { eventId, status } = req.body; // Status can be 'yes', 'no', or 'maybe'
  try {
    // Check if the event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if the user has already RSVPed
    let rsvp = await RSVP.findOne({ eventId, userId: req.user.id });
    if (rsvp) {
      // Update existing RSVP
      rsvp.status = status;
      await rsvp.save();
      return res.json({ message: 'RSVP updated', rsvp });
    }

    // Create new RSVP
    rsvp = new RSVP({
      eventId,
      userId: req.user.id,
      status,
    });
    await rsvp.save();
    res.status(201).json({ message: 'RSVP submitted', rsvp });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting RSVP' });
  }
};

// Get RSVPs for an event
const getRSVPsForEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const rsvps = await RSVP.find({ eventId }).populate('userId', 'name email');
    res.json(rsvps);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching RSVPs' });
  }
};

module.exports = { rsvpToEvent, getRSVPsForEvent };
