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
  `
SELECT A.author_name , M.author_name
FROM authors AS A 
JOIN authors AS M
ON A.author_id=M.mentor;`,
  (error, results) => {
    if (error) throw error;
    console.log(results);
  }
);

con.query(
  `
SELECT author_name,paper_title FROM authors LEFT JOIN link_authors_papers
ON authors.author_id=link_authors_papers.author_id LEFT JOIN  research_Papers
ON link_authors_papers.paper_id=research_Papers.paper_id;`,
  (error, results) => {
    if (error) throw error;
    console.log(results);
  }
);

con.end();
