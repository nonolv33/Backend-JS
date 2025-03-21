host: process.env.HOST,


const dotenv = require('dotenv');
const mysql = require ('mysql');


dotenv.config();


const databaseConnection = mysql.createConnection({


host: process.env.HOST,
user: process.env.DB_USER,
password: process.env.DB_PASS,
database: process.env.DB_DATABASE

});

module.exports = databaseConnection;