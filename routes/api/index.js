const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// Import your route files
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Use your routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
