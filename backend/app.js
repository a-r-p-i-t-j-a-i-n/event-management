// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // DB connection function
const eventRoutes = require('./routes/eventRoutes');
const attendeeRoutes = require('./routes/attendeeRoutes');
const rsvpRoutes = require('./routes/rsvpRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const errorHandler = require('./middleware/errorHandler'); 
const userRoutes=require('./routes/userRoutes');
const cors = require('cors');
dotenv.config();

// Connect to database
connectDB();

const app = express();
app.use(express.json());  // Body parser
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
// Routes
app.use('/api/events', eventRoutes);
app.use('/api/events', attendeeRoutes);
app.use('/api/rsvps', rsvpRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/users', userRoutes); 
// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
