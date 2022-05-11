const express = require('express')
const app = express()
const port = 9999
app.post('/addiction',function(req,res){
    var a=14;
    var b=15;
    Var= c=a+b;
    res.send('Addiction'+c)
})
app.post('/subtraction',function(req,res){
    var a=14;
    var b=15;
    Var= c=a-b;
    res.send('subtraction'+c)
})
app.post('/multiplication',function(req,res){
    var a=14;
    var b=15;
    Var= c=a*b;
    res.send('multication'+c)
})
app.post('/division',function(req,res){
    var a=14;
    var b=15;
    Var= c=a/b;
    res.send('divison'+c)
})
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})