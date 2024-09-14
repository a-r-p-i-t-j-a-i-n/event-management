const express = require('express');
const { rsvpToEvent, getRSVPsForEvent } = require('../controllers/rsvpController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// RSVP to an event
router.post('/', protect, rsvpToEvent);

// Get all RSVPs for an event
router.get('/:eventId', protect, getRSVPsForEvent);

module.exports = router;
