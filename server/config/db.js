// Import mysql library
const mysql = require('mysql');

// Create connection 
const connection = mysql.createConnection({
    host: '45.55.54.86',
    user: 'root',
    password: 'DeVf_2020',
    database: 'contable_main'
});
// Connect to database
connection.connect((err) => {
    if (err) {
        return;
    }
    console.log('Connected de DB!');
});

module.exports = connection;
