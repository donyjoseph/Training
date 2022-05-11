var express = require('express');
var mysql = require('mysql');

var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "studenttbl"
});


app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/countryfetch', function (req, res) {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM studentdetails", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
    //res.send('Countryfetch');
})

app.use(express.json());

app.post('/statefetch', function (req, res) {
    var a=req.body.id;
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM studentdetails where STUDENTID='"+ a + "'", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    });
    //res.send('Countryfetch');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})