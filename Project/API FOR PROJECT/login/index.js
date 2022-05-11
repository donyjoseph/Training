const express = require('express');
const app = express();
app.use(express.json());
var mysql = require("mysql");
var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "country"
    });
app.post('/updateproduct', function (req, res) {

    con.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Connected");
        }
        var sql = "UPDATE customers txtprodName = 'diamond' WHERE txtProdPrice = '45'";;

        con.query(sql, function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("edited product!!!!");
                res.send(result);
            }

        });
    });

})
app.listen(5050, () => {
    console.log("Server is running!!!!");
})