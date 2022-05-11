const express = require('express')
const app = express()
const port = 2500

app.post('/', (req, res) => {
  res.send('tn!')
})
app.post('/addition', (req, res) => {
  var a=3;
  var b=5;
  var c=a+b;
    res.send('addition!'+c)
  })
  app.post('/subtraction', (req, res) => {
    var a=3;
    var b=5;
    var c=a-b;
    res.send('subtration!'+c)
  })
  app.post('/multiplication', (req, res) => {
    var a=3;
    var b=5;
    var c=a*b;
    res.send('multiplication!'+c)
  })
  app.post('/divison', (req, res) => {
    var a=3;
    var b=5;
    var c=a/b;
    res.send('division!'+c)
  })
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
