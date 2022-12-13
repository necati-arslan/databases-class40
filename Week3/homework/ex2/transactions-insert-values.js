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

con.query(`INSERT INTO account(balance)
 VALUES (3000),(2000),(3000);`);

con.query(`INSERT INTO account_changes(account_number, amount, change_date, remark) 
 VALUES (100,100,'2022-12-12', 'rent'),(101,200,'2022-12-11', 'bill'),(102,300,'2022-11-30', 'borrow');`);

con.end();
