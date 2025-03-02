const mongoose = require('mongoose'); // Import the mongoose library
const Song = require('./models/Song.js'); // Import the Song model
mongoose.connect('mongodb://localhost/songsterr_clone', { // Connect to the MongoDB database
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the unified topology
});

const seedData = [ // Define the seed data
    {
        title: 'Sample Song', // Song title
        artist: 'Sample Artist', // Song artist
        instrument: 'guitar', // Instrument
        difficulty: 'intermediate', // Difficulty level
        tabFilePath: 'tabs/sample.gp', // Path to the tab file
    },
];

Song.insertMany(seedData) // Insert the seed data into the database
    .then(() => {
        console.log('Database seeded'); // Log a message if the seeding is successful
        mongoose.connection.close(); // Close the database connection
    })
    .catch(err => console.error(err)); // Log an error message if the seeding fails
