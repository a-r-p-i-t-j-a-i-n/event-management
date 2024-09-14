import axios from 'axios';

// Create an Axios instance with the base URL set to your backend API URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update to your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add request and response interceptors if needed
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

api.interceptors.response.use(response => response, error => {
  if (error.response && error.response.status === 401) {
    // Handle unauthorized errors (e.g., redirect to login)
    console.error('Unauthorized access - Redirecting to login');
    window.location.href = '/login';
  }
  return Promise.reject(error);
});

export default api;
