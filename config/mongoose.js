
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ashish:ashish123@polling-system.64srs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/api-polling');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', () => {
    console.log('Connected to Database : MongoDB');
});

module.exports = db;
