const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

//Connect
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the Database.");
});

module.exports = connection;