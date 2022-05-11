let mysql = require('mysql');
let connection = mysql.createConnection({
    host: '3306',
    user: 'root',
    password: 'dony',
    database: 'todoapp'
});
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });