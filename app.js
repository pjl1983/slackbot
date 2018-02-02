var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.status(200).send('Success!')
});

app.listen(port, function () {
	console.log('Listening on port ' + port);
});

app.post('/lunch', function(req, res, next) {
	var userName = req.body.user_name;
	var botPayload = {
		text: "Hello " + userName + "welcome to slack Botz!"
	}

	if (userName !== 'slackbot') {
		return 	res.status(200).json(botPayload);
	} else {
		return 	res.status(200).end();
	}


});

