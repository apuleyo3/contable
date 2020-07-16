const connection = require('../config/db');

exports.validateUser = (req, res) => {

    if(connection!==undefined && connection.state!=='disconnected'){
        // Get user and password from body
        const { email, password } = req.body;

        // Make query for database to get users data for validation
        const query = `SELECT firstname, lastname, email, pass FROM users WHERE email='${email}'`;
        // Execute query
        connection.query(query, (error,row) => {
            if(error){
                // console.log(error);
                res.status(500).json({ msg: error.sqlMessage })
                return;
            }
            else if(row[0]){
                // console.log(row[0]);
                res.json(row[0]);
            }else{
                res.status(404).json({ msg: "User not found" });
            }
        });
    }else{
        res.status(500).json({ msg: "Error connecting to database" })
    }
}