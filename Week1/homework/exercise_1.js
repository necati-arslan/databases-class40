var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("CREATE DATABASE IF NOT EXISTS meetup", (err, result) => {
  if (err) {
    throw err;
  }
  console.log("Database created");
});

con.query("USE meetup", (err, result) => {
  if (err) throw err;
  console.log("connect database meetup");
});

const tableInvitee =
  "CREATE TABLE IF NOT EXISTS Invitee (invitee_no INT AUTO_INCREMENT, invitee_name VARCHAR(255), invited_by VARCHAR(255), PRIMARY KEY (invitee_no))";

const tableRoom =
  "CREATE TABLE IF NOT EXISTS Room (room_no INT AUTO_INCREMENT, room_name VARCHAR(255), floor_number INT, PRIMARY KEY (room_no))";

const tableMeeting =
  "CREATE TABLE IF NOT EXISTS Meeting (meeting_no INT AUTO_INCREMENT, meeting_title VARCHAR(255), starting_time DATETIME, ending_time DATETIME, room_no INT, PRIMARY KEY (meeting_no), FOREIGN KEY (room_no) REFERENCES Room(room_no))";

const runQuery = (queryName, query) => {
  con.query(query, (err) => {
    if (err) throw err;
    console.log(`${queryName} is created`);
  });
};

runQuery("Invitee", tableInvitee);
runQuery("Room", tableRoom);
runQuery("Meeting", tableMeeting);

const insertInvitee = "INSERT INTO Invitee (invitee_name, invited_by) VALUES ?";
const valuesInvitee = [
  ["Michel", "Madona"],
  ["Zidan", "Ronaldo"],
  ["Hagi", "Emre"],
  ["Carlos", "Henry"],
  ["Xavi", "Pele"],
];

con.query(insertInvitee, [valuesInvitee], (err, result) => {
  if (err) throw err;
  console.log("5 Rows are added in Invitee");
});

const insertRoom = "INSERT INTO Room (room_name, floor_number) VALUES ?";
const valuesRoom = [
  ["Standart", 3],
  ["King", 5],
  ["Standart", 4],
  ["Standart", 2],
  ["Standart", 2],
];

con.query(insertRoom, [valuesRoom], (err, result) => {
  if (err) throw err;
  console.log("5 Rows are added in Rooms");
});

const insertMeeting =
  "INSERT INTO Meeting (meeting_title, starting_time, ending_time, room_no) VALUES ?";

const valuesMeeting = [
  ["Pets", "2022-03-03 20:00", "2022-03-03 22:00", 5],
  ["Foods", "2022-04-15 14:00", "2022-04-15 17:00", 3],
  ["Travel", "2022-04-15 14:00", "2022-04-15 17:00", 1],
  ["Economy", "2022-03-03 20:00", "2022-03-03 22:00", 4],
  ["Human Health", "2021-03-11 10:00", "2022-03-11 11:30", 2],
];

con.query(insertMeeting, [valuesMeeting], (err, result) => {
  if (err) throw err;
  console.log("5 Rows are added in meeting");
});

con.end();
