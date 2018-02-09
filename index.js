const express = require('express')
const app = express()

var accountSid = process.env.TWILIOAUTH
var authToken = process.env.TWILIOTOKEN


const client = require('twilio')(accountSid, authToken);

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/call', (req, res) => {

	client.calls
	  .create({
	    url: 'http://demo.twilio.com/docs/voice.xml',
	    to: '+1' + req.query.number,
	    from: '+16476961768',
	  })
	  .then(call => process.stdout.write(call.sid));
	
	console.log("test");
	res.send("got it");
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))