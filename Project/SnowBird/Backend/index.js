const express = require('express');
const app = express();
var mysql = require('mysql');
app.use(express.json());
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "todoapp"

    });
con.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Connected");
    }
})


app.post('/fetchEpic', function (req, res) {
    var uid = req.body.userId;
    var sql="select txtDescription,txtTitle,Txtstatus from tblepic where refAssignee='" + uid + "'"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
        console.log('hi') 
    })
})


app.post('/userfetch', function (req, res) {
    var pownerid = req.body.poid;

    console.log('hi')
    var sql="select txtUserName,txtPassword from tblusers where refUserRole='" + id + "';"
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
    })
})
app.post('/fetchsprint', function (req, res) {
    var pownerid = req.body.poid;

    
var sql= "select txtSprintname,dtActstartDate,dtActEndDate from tblsprints "
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
        console.log(result);
    })
})


app.post('/Taskinsert', function (req, res) {
    var txtTitle = req.body.name;
    var txtDescripation = req.body.des;
    var refstatus = req.body.status;
    var sql= "insert into tbltasks(txtTitle,txtDescripation,txtStatus)values('" + txtTitle + "','" + txtDescripation + "','" + refstatus +"');";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})


var epic=[{"epic":"name1"},{"epic":"name2"}];
var task1=[1,2,3];
var task2=[4,5,6];

var result=epic;
result[0]["task"]=task1
result[1]["task"]=task2;
console.log(result)
app.listen(8000, () => {
    console.log("Server is running");
})