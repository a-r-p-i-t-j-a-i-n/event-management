// controllers/eventController.js
const Event = require('../models/Event');
const Notification = require('../models/Notification'); // Import Notification model

// Create a new event
const createEvent = async (req, res) => {
  const { name, description, date, location } = req.body;
  try {
    const event = new Event({
      name,
      description,
      date,
      location,
      createdBy: req.user.id,
    });
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error("Error creating event:", error);  // Log the error to see what's wrong
    res.status(500).json({ message: 'Error creating event' });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('attendees', 'name email');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events' });
  }
};

// Get a single event by ID
const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id).populate('attendees', 'name email');
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event' });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, description, date, location } = req.body;
  try {
    const event = await Event.findByIdAndUpdate(id, {
      name,
      description,
      date,
      location
    }, { new: true });
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error updating event' });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event' });
  }
};

// Send reminder for an event
const sendReminder = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Example logic for sending a reminder
    if (!event.reminderSent) {
      // Send reminder notification (you'll need to implement this logic)
      await Notification.create({
        eventId: id,
        userId: event.createdBy, // Notify the creator or other attendees
        message: `Reminder: Your event "${event.name}" is coming up on ${event.date}`
      });

      // Update event to mark the reminder as sent
      event.reminderSent = true;
      await event.save();
      
      res.json({ message: 'Reminder sent' });
    } else {
      res.json({ message: 'Reminder already sent' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error sending reminder' });
  }
};

module.exports = { createEvent, getEvents, getEventById, updateEvent, deleteEvent, sendReminder };
