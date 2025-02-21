const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');  // Import user routes

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());  // To parse incoming JSON requests

// Use the user routes
app.use('/api', userRoutes);  // All routes in userRoutes will be prefixed with /api

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
