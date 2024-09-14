const express = require('express');
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent, sendReminder } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware'); // Import protect middleware
const router = express.Router();

// Protect the event routes
router.post('/', protect, createEvent); // Protect this route
router.get('/', protect, getEvents);
router.get('/:id', protect, getEventById);
router.put('/:id', protect, updateEvent);
router.delete('/:id', protect, deleteEvent);
router.post('/:id/reminder', protect, sendReminder);

module.exports = router;
