// Importing the Router object from the express package
const router = require('express').Router();

// Importing userRoutes and thoughtRoutes modules
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Using middleware to mount userRoutes under the /users endpoint
router.use('/users', userRoutes);

// Using middleware to mount thoughtRoutes under the /thoughts endpoint
router.use('/thoughts', thoughtRoutes);


// Exporting the router module
module.exports = router;
