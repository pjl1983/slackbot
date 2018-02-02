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

    var options = ['Fired Pie','Red Robin','Cold Beer & Cheezeburgers','Yogis','Gyro Express','Portillos','Canton Dragon','Joyful Chinese','Porkopolis','Naked BBQ','Tavern','Pei Wei','Wallys','The Vig','Humble Pie',]
    var choice = "Fired Pie";
    (function () {
        var number = Math.floor(Math.random() * options.length);
        choice = options[number];
    })();

    var botPayload = {
	response_type: "in_channel",
        text: "I recommend eating at " + choice + "."
    }

	if (userName !== 'slackbot') {
		return 	res.status(200).json(botPayload);
	} else {
		return 	res.status(200).end();
	}


});

