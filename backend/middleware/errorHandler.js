// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging
  
    // Handle different types of errors
    if (err.name === 'ValidationError') {
      // Mongoose validation error
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  
    if (err.name === 'CastError') {
      // Mongoose cast error (e.g., invalid ID format)
      return res.status(400).json({
        success: false,
        message: 'Invalid ID format.',
      });
    }
  
    if (err.code === 11000) {
      // Duplicate key error (e.g., unique constraint violation)
      return res.status(400).json({
        success: false,
        message: 'Duplicate key error.',
      });
    }
  
    // Handle other types of errors
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  };
  
  module.exports = errorHandler;
  