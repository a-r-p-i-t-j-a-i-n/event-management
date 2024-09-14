import api from './api';

// User login
export const loginUser = (email, password) => api.post('/users/login', { email, password });

// User registration
export const registerUser = (userData) => api.post('/users/register', userData);

// Get user profile
export const getUserProfile = () => api.get('/users/profile');
