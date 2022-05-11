const express = require('express')
const app = express()
const port = 2500

app.get('/', (req, res) => {
  res.send('tn!')
})
function addNumbers()
	{
		var val1 = parseInt(document.getElementById("value1").value);
		var val2 = parseInt(document.getElementById("value2").value);
		var ansD = document.getElementById("answer");
		ansD.value = val1 + val2;
	}
app.get('/answer', (req, res) => {
    res.send('answer!')
  })
  app.get('/statefetch', (req, res) => {
    res.send('delhi!')
  })
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
