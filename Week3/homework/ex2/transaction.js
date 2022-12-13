const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "week3",
});

con.query("START TRANSACTION");
con.query(
  `UPDATE account SET balance=balance-1000 WHERE account_number=101`,
  (err, res) => {
    if (err) throw err;
    console.log("transaction start. account number 101 send 1000");
  }
);

con.query(
  `UPDATE account SET balance=balance+1000 WHERE account_number=102`,
  (err, res) => {
    if (err) throw err;
    console.log("Account 102 got 1000");
  }
);

con.query(`INSERT INTO account_changes (account_number, amount, change_date, remark) 
     VALUES(101, 1000 , '2022-01-01', 'borrow'),(102, 1000 , '2022-01-01', 'borrow')
   `);

con.query(`COMMIT`);

con.end();
