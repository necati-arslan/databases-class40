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

con.query(
  `CREATE TABLE  IF NOT EXISTS  authors(author_id INT AUTO_INCREMENT, 
        author_name VARCHAR(255), university VARCHAR(255), 
        date_of_birth DATE,  h_index INT, gender ENUM('M', 'F'),
        PRIMARY KEY (author_id))`,
  (err) => {
    if (err) throw err;
  }
);

con.query(`ALTER TABLE authors ADD mentor INT`);

con.query(
  `ALTER TABLE authors ADD FOREIGN KEY (mentor) REFERENCES authors(author_id)`
);

con.end();
