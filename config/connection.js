// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ov4p6sxgfxjzzlwx",
  password: "glxuoy5qsjj4wx7x",
  database: "pvehzk3tb4t7zsx5"
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
