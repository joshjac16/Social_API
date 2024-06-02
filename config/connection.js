// Importing required modules from mongoose package
const { connect, connection } = require('mongoose');

// Defining the connection string for MongoDB
const connectionString = 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString);

// Exporting the connection object to be used in other modules
module.exports = connection;
