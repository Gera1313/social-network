const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    UseFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB database');
});

module.exports = db;