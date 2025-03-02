// server.js
const express = require('express'); // Import the express library
const mongoose = require('mongoose'); // Import the mongoose library for MongoDB interaction
const bodyParser = require('body-parser'); // Import body-parser middleware to parse request bodies
const cors = require('cors'); // Import cors middleware to handle Cross-Origin Resource Sharing
const path = require('path'); // Import the path module for handling file paths
const apiRoutes = require('./routes/api'); // Import the API routes from ./routes/api.js

const app = express(); // Create an express application

// Middleware
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON request bodies
app.use(cors()); // Use cors middleware to allow cross-origin requests
app.use(express.static(path.join(__dirname, 'tabs'))); // Serve static files from the 'tabs' directory

// Connect to MongoDB
mongoose.connect('mongodb://localhost/songsterr_clone', { // Connect to the MongoDB database
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true // Use the unified topology
})
    .then(() => console.log('MongoDB connected')) // Log a message if the connection is successful
    .catch(err => console.error(err)); // Log an error message if the connection fails

// API Routes
app.use('/api', apiRoutes); // Use the API routes defined in ./routes/api.js

// Add after API routes
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000; // Set the port to the environment variable PORT or 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server and log a message
