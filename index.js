const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/call', (req, res) => {

	console.log("test");
	console.log(req.query.number);
	res.send("got it");
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))