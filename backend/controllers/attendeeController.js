const Event = require('../models/Event');
const User = require('../models/User');

// Get all attendees for an event
const getAttendees = async (req, res) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findById(eventId).populate('attendees', 'name email');
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event.attendees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching attendees' });
  }
};

// Add an attendee to an event
const addAttendee = async (req, res) => {
  const { eventId } = req.params;
  const { userId } = req.body;
  
  try {
    // Check if event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the user is already an attendee
    if (event.attendees.includes(userId)) {
      return res.status(400).json({ message: 'User is already an attendee' });
    }

    // Add the user to the event's attendees
    event.attendees.push(userId);
    await event.save();

    res.status(201).json({ message: 'Attendee added', attendees: event.attendees });
  } catch (error) {
    res.status(500).json({ message: 'Error adding attendee' });
  }
};

// Remove an attendee from an event
const removeAttendee = async (req, res) => {
  const { eventId, attendeeId } = req.params;
  
  try {
    // Check if event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if the attendee exists in the event's attendees
    const attendeeIndex = event.attendees.indexOf(attendeeId);
    if (attendeeIndex === -1) {
      return res.status(404).json({ message: 'Attendee not found in this event' });
    }

    // Remove the attendee from the attendees list
    event.attendees.splice(attendeeIndex, 1);
    await event.save();

    res.json({ message: 'Attendee removed', attendees: event.attendees });
  } catch (error) {
    res.status(500).json({ message: 'Error removing attendee' });
  }
};

module.exports = {
  getAttendees,
  addAttendee,
  removeAttendee
};
