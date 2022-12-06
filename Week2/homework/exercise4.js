var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "week2",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//All research papers and the number of authors that wrote that paper.

con.end();
