const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network",);

module.exports = mongoose.connection;

// DONE