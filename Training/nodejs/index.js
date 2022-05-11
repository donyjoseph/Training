const express = require('express')
const app = express()
const port = 2500

app.get('/', (req, res) => {
  res.send('tn!')
})
app.get('/countryfetch', (req, res) => {
    res.send('kerala!')
  })
  app.get('/statefetch', (req, res) => {
    res.send('delhi!')
  })
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
