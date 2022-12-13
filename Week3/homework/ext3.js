const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

function getPopulation(Country, name, code, cb) {
  // assuming that connection to the database is established and stored as conn
  con.query(
    `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}

//1- Give an example of a value that can be passed as name and code that would take advantage of SQL-injection and (fetch all the records in the database)

getPopulation("country", "Zambia", "ZMB 'OR' 1=1;", (error, result) => {
  console.log(result);
});

con.end();
