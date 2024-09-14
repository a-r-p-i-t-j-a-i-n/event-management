import api from './api';

// Get all events
export const getAllEvents = () => api.get('/events');

// Get event details
export const getEventDetails = (eventId) => api.get(`/events/${eventId}`);

// Create a new event
export const createEvent = (eventData) => api.post('/events', eventData);

// Update an event
export const updateEvent = (eventId, eventData) => api.put(`/events/${eventId}`, eventData);

// Delete an event
export const deleteEvent = (eventId) => api.delete(`/events/${eventId}`);

// Send a reminder for an event
export const sendReminder = (eventId) => api.post(`/events/${eventId}/reminder`);

// Get attendees for an event
export const getAttendees = (eventId) => api.get(`/events/${eventId}/attendees`);

// Add an attendee to an event
export const addAttendee = (eventId, attendeeData) => api.post(`/events/${eventId}/attendees`, attendeeData);

// Remove an attendee from an event
export const removeAttendee = (eventId, attendeeId) => api.delete(`/events/${eventId}/attendees/${attendeeId}`);
