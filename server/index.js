// Import express library
const express = require('express');
// Create App for server
const App = express();

// Import DB connection
require('./config/db');

// Add port from local environment or assign manually
const port = process.env.PORT || 4000;
// Enable express.json
App.use( express.json({ extended: true }));

// Import Routes
App.use('/api/users', require('./routes/users'));

App.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});