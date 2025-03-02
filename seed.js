const mongoose = require('mongoose');
const Song = require('./models/Song');

mongoose.connect('mongodb://localhost/songsterr_clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = [
  {
    title: 'Sample Song',
    artist: 'Sample Artist',
    instrument: 'guitar',
    difficulty: 'intermediate',
    tabFilePath: 'tabs/sample.gp',
  },
];

Song.insertMany(seedData)
  .then(() => {
    console.log('Database seeded');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
