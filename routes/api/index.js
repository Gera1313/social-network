// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3002;

// // Import your route files
// const userRoutes = require('./userRoutes');
// const thoughtRoutes = require('./thoughtRoutes');

// // Use your routes
// app.use('/api/users', userRoutes);
// app.use('/api/thoughts', thoughtRoutes);

const express = require('express');
const router = express.Router();

const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;
