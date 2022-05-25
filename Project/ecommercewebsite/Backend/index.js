const express = require("express");
const app = express();
var mysql = require("mysql");
app.use(express.json())
const cors = require('cors');
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "country",
});
app.post("/uservalidate", function (req, res) {
  console.log(req.body);
  var Username = req.body.txtUsername;
  var password = req.body.txtPassword;
  var sql =
    "select id from tblusers where txtUsername='" +
    Username +
    "' and txtPassword='" +
    password +
    "';";
console.log(sql)
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/addproduct", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;

    var sql =
      "insert into tblproduct (txtProdName,txtProdPrice) values('test',45)";
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
});
app.post("/productfetch", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "select id,txtProdName,txtProdPrice,txtGst from tblproduct; ";
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
});
app.post("/editproduct", function (req, res) {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "update tblproduct set txtProdPrice='200' where id=1";
    con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
});
app.listen(5000, function () {
  console.log("5000 server is connected!!!");
});
