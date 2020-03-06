var mysql = require("mysql");
const { Client } = require('pg');



var connection;
console.log("database URL " + process.env.DATABASE_URL);
if(process.env.DATABASE_URL){
    connection = new Client({
    connectionString:process.env.DATABASE_URL,
    ssl: true,
  })
}
  else {
      console.log("local connection")
      connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burgers_db"
      });
    }


// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "burgers_db"
//   });
// }

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as "+ connection.threadId);
  });




// Export connection for our ORM to use.
module.exports = connection;