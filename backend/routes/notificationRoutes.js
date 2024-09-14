const express = require('express');
const { sendNotification } = require('../controllers/notificationController');
const router = express.Router();

// Send notification for an event
router.post('/:eventId/notify', sendNotification);

module.exports = router;
