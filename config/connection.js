// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "m91c8es8tl4tuntu",
  password: "lkztg9n8ba3mut2d",
  database: "mrq45329v7c1cyek"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
