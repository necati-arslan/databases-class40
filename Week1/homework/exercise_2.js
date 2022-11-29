var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "world",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const queriesAll = [
  `SELECT name, population FROM country WHERE population > 8000000`,

  `SELECT name FROM country WHERE name LIKE '%land%'`,

  `SELECT name, population FROM city WHERE population BETWEEN 500000 AND 1000000;`,

  `SELECT name FROM country WHERE continent = 'Europe';`,

  `SELECT name FROM country ORDER BY surfaceArea DESC;`,

  `SELECT name FROM city WHERE countryCode = 'NLD';`,

  `SELECT name, population FROM city WHERE name = 'Rotterdam';`,

  `SELECT name, surfaceArea FROM country ORDER BY surfaceArea DESC LIMIT 10;`,

  `SELECT name, population FROM city ORDER BY population DESC LIMIT 10;`,

  `SELECT SUM (population) FROM country;`,
];

queriesAll.forEach((query) => {
  console.log(query);
  con.query(query, (error, results) => {
    if (error) throw error;
    console.log(query);
    console.log(results);
  });
});
