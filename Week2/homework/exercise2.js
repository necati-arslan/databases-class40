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
  `CREATE TABLE  IF NOT EXISTS 
  research_Papers(paper_id INT AUTO_INCREMENT, 
paper_title VARCHAR(255),  conference VARCHAR(252),publish_date DATE,PRIMARY KEY (paper_id)); `
);

con.query(`
CREATE TABLE IF NOT EXISTS link_authors_papers( id INT PRIMARY KEY AUTO_INCREMENT, author_id INT, paper_id INT,
  FOREIGN KEY (author_id) REFERENCES authors(author_id),
  FOREIGN KEY (paper_id) REFERENCES research_Papers(paper_id));
`);

con.query(`INSERT INTO authors(author_name, university, date_of_birth, h_index, gender, mentor)
VALUES
("Pele","Leiden","1983-02-05", 99,"M",1),
("Zidan","Amsterdam","1983-02-05", 22,"M",null),
("Ronaldo","Groningen","1983-02-05", 33,"M",3),
("Pepe","Amsterdam","1983-02-05", 23,"M",4),
("Roberto","Leiden","1983-02-05", 23,"M",5),
("Tete","Leiden","1983-02-05", 24,"F",3),
("Pele","Leiden","1983-02-05", 99,"M",1),
("Zidan","Amsterdam","1983-02-05", 22,"M",2),
("Ronaldo","Groningen","1983-02-05", 33,"M",3),
("Pepe","Amsterdam","1983-02-05", 23,"M",4),
("Roberto","Leiden","1983-02-05", 23,"M",5),
("Tete","Leiden","1983-02-05", 24,"F",3),
("Pele","Leiden","1983-02-05", 99,"M",1),
("Zidan","Amsterdam","1983-02-05", 22,"M",2),
("Ronaldo","Groningen","1983-02-05", 33,"M",3),
("Pepe","Amsterdam","1983-02-05", 23,"M",4),
("Roberto","Leiden","1983-02-05", 23,"M",5),
("Tete","Leiden","1983-02-05", 24,"F",3)
`);

con.query(`INSERT INTO research_Papers(paper_title, conference, publish_date)
VALUES
("book1", "Conference1", "2021-03-03"),
("book2", "Conference2", "2021-03-03"),
("book3", "Conference3", "2021-03-03"),
("book4", "Conference4", "2021-03-03"),
("book5", "Conference5", "2021-03-03"),
("book6", "Conference6", "2021-03-03"),
("book7", "Conference7", "2021-03-03"),
("book8", "Conference8", "2021-03-03"),
("book9", "Conference9", "2021-03-03"),
("book10", "Conference10", "2021-03-03"),
("book11", "Conference11", "2021-03-03"),
("book12", "Conference12", "2021-03-03"),
("book13", "Conference13", "2021-03-03"),
("book14", "Conference14", "2021-03-03"),
("book15", "Conference15", "2021-03-03"),
("book2-1", "Conference1", "2021-03-03"),
("book2-2", "Conference2", "2021-03-03"),
("book2-3", "Conference3", "2021-03-03"),
("book2-4", "Conference4", "2021-03-03"),
("book2-5", "Conference5", "2021-03-03"),
("book2-6", "Conference6", "2021-03-03"),
("book2-7", "Conference7", "2021-03-03"),
("book2-8", "Conference8", "2021-03-03"),
("book2-9", "Conference9", "2021-03-03"),
("book2-10", "Conference10", "2021-03-03"),
("book2-11", "Conference11", "2021-03-03"),
("book2-12", "Conference12", "2021-03-03"),
("book2-13", "Conference13", "2021-03-03"),
("book2-14", "Conference14", "2021-03-03"),
("book2-15", "Conference15", "2021-03-03")`);

con.query(`INSERT link_authors_papers(author_id, paper_id) 
  VALUES(1,1),(2,2),(3,3),(3,4),(3,5),(4,6),(4,7),(5,8),(6,9),(7,19),(7,18),(8,22),(9,14),(10,15)
`);
