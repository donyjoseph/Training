const express=require('express');
const app=express();
app.use(express.json());
app.post('/test',function(req,res){
var a=req.body[0];
res.send(a);


} ) 
app.listen(4000,()=>
{
   console.log("server is running")
})