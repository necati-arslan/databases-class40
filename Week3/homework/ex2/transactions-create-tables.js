const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "week3",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query(
  `CREATE TABLE IF NOT EXISTS account(account_number INT PRIMARY KEY  AUTO_INCREMENT,balance INT)`,
  (err, res) => {
    if (err) throw err;
  }
);

con.query(`ALTER TABLE account AUTO_INCREMENT = 100`);

con.query(
  `CREATE TABLE account_changes(change_number INT PRIMARY KEY AUTO_INCREMENT, account_number INT NOT NULL,
    amount INT NOT NULL, change_date DATE NOT NULL,remark VARCHAR(255) NOT NULL,
    FOREIGN KEY (account_number) REFERENCES account (account_number)
  )`,
  (err, res) => {
    if (err) throw err;
  }
);

con.end();
