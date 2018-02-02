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
    var options = ['Fired Pie','Red Robin','Cold Beer & Cheezeburgers','Yogis','Gyro Express','Portillos','Canton Dragon','Joyful Chinese','Porkopolis','Naked BBQ','Tavern','Pei Wei','Wallys','The Vig','Humble Pie',]

	var food = function () {
        var number = Math.floor(Math.random() * options.length);
        var choice = options[number];
        return choice;
    };

    var botPayload = {
		text: "Tim recommends eating at " + food + "."
	}

	if (userName !== 'slackbot') {
		return 	res.status(200).json(botPayload);
	} else {
		return 	res.status(200).end();
	}


});

