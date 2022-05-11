var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "studenttbl"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("UPDATE* FROM studentdetails", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
