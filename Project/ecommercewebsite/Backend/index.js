const express=require('express');
const app=express();
var mysql=require('mysql');

var con = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "country"
})
app.post('/uservalidate',function(req,res)
{
    con.connect(function(err)    
    {
    
    con.query(sql,function(err,result)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
})
    app.post('/fetchproduct', function (req, res) 

{
   var a=req.body.id;
   con.connect(function (err) 
   {
       
       if (err) throw err;var sql="select txtUsername="+Rajesh+"and txtPassword="+david+"' from tblusers;";
       con.query(sql,function(err,result)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
        });
    })
});



app.post('/addproduct', function (req, res) 

{
   var a=req.body.id;
   con.connect(function (err) 
   {
       
       if (err) throw err;

       var sql = "insert into tblproduct (txtProdName,txtProdPrice) values('test',45)";
       con.query(sql,function(err,result)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
        });
    })
});
app.post('/countryfetch', function (req, res) 

{
   var a=req.body.id;
   con.connect(function (err) 
   {
       
    if (err) throw err;
    var sql="select txtcountryname from tblcountry;";
       con.query(sql,function(err,result)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
        });
    })
});
app.post('/editproduct', function (req, res) 

{
   var a=req.body.id;
   con.connect(function (err) 
   {
       
       if (err) throw err;
       var sql = "update tblproduct set txtProdPrice='200' where id=1";
       con.query(sql,function(err,result)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
        });
    })
});
})
});
app.listen(5000,function()
{
 console.log("server is connected!!!");
});