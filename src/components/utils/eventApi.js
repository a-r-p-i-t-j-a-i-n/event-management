import api from './api';

// Get all events
export const getAllEvents = () => api.get('/events');

// Get event details
export const getEventDetails = (eventId) => api.get(`/events/${eventId}`);

// Create a new event
export const createEvent = (eventData) => api.post('/', eventData); // Adjusted to match backend route

// Update an event
export const updateEvent = (eventId, eventData) => api.put(`/${eventId}`, eventData); // Adjusted to match backend route

// Delete an event
export const deleteEvent = (eventId) => api.delete(`/${eventId}`); // Adjusted to match backend route

// Send a reminder for an event
export const sendReminder = (eventId) => api.post(`/${eventId}/reminder`); // Adjusted to match backend route
