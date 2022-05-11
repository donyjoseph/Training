const express = require('express')
const app = express();
const port=5050

app.use(express.json());
app.post('/addition', function (req, res) {
    console.log(req.res);
    var a=parseInt(req.body.numone);
    var b=parseInt(req.body.numtwo);
    var c=a+b;
    res.send("Result="+c);
})
app.use(express.json());
app.post('/subtraction', function (req, res) {
    console.log(req.res);
    var a=parseInt(req.body.numone);
    var b=parseInt(req.body.numtwo);
    var c=a-b;
    res.send("Result="+c);
})
app.use(express.json());
app.post('/Multipication', function (req, res) {
    console.log(req.res);
    var a=parseInt(req.body.numone);
    var b=parseInt(req.body.numtwo);
    var c=a*b;
    res.send("Result="+c);
})
app.use(express.json());
app.post('/division', function (req, res) {
    console.log(req.res);
    var a=parseInt(req.body.numone);
    var b=parseInt(req.body.numtwo);
    var c=a/b;
    res.send("Result="+c);
})

app.listen(3000, () => {
    console.log("server is running");
})