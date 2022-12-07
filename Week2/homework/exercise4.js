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

con.query(` 
SELECT research_Papers.paper_title, COUNT(authors.author_id) AS NumberOfAuthors FROM authors
LEFT JOIN link_authors_papers
ON authors.author_id=link_authors_papers.author_id
LEFT JOIN research_Papers
ON link_authors_papers.paper_id=research_Papers.paper_id
GROUP BY research_Papers.paper_title;
`);

// 2 Sum of the research papers published by all female authors.
con.query(`
    SELECT gender, COUNT(research_Papers.paper_title) AS Paper FROM authors
	LEFT JOIN link_authors_papers
    ON authors.author_id=link_authors_papers.author_id
    LEFT JOIN research_Papers
    ON link_authors_papers.paper_id=research_Papers.paper_id
    WHERE gender="F";`);

//3 Average of the h-index of all authors per university.
con.query(`SELECT university, AVG(h_index)  FROM authors GROUP BY university;`);

//4 Sum of the research papers of the authors per university.
con.query(` SELECT authors.university, COUNT(link_authors_papers.id) 
FROM authors JOIN link_authors_papers ON authors.author_id=link_authors_papers.author_id
GROUP BY authors.university;
`);

//5 Minimum and maximum of the h-index of all authors per university.
con.query(
  `SELECT university, MAX(h_index) AS MAX_h, MIN(h_index) AS MIN_h FROM authors GROUP BY university;`
);

con.end();
