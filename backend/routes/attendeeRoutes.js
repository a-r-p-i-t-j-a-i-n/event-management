const express = require('express');
const { getAttendees, addAttendee, removeAttendee } = require('../controllers/attendeeController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Get all attendees for a specific event
router.get('/:eventId/attendees', protect, getAttendees);

// Add a new attendee to an event
router.post('/:eventId/attendees', protect, addAttendee);

// Remove an attendee from an event
router.delete('/:eventId/attendees/:attendeeId', protect, removeAttendee);

module.exports = router;
