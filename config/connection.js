var mysql = require("mysql");

var connection;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306 || //heroku here
    user: "root",
    password: "root",
    database: "burgers_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as "+ connection.threadId);
  });



// Export connection for our ORM to use.
module.exports = connection;