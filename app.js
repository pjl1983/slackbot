const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.status(200).send('Success!');
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});

app.post('/lunch', function(req, res, next) {
  const userName = req.body.user_name;
  const options = ['Fired Pie', 'Red Robin', 'Cold Beer & Cheezeburgers', 'Yogis', 'Gyro Express', 'Portillo\'s', 'Canton Dragon', 'Joyful Chinese', 'Famous 48', 'Naked BBQ', 'Tavern', 'Pei Wei', 'The Vig', 'The Other tavern', 'Chompies', 'Ling & Louies', 'Streets of New York', 'Grassroots', 'Zipps'];
  let choice = 'Fired Pie';
  (function() {
    var number = Math.floor(Math.random() * options.length);
    choice = options[number];
  })();

  let botPayload = {
    response_type: 'in_channel',
    text: 'I recommend eating at ' + choice + '.',
  };

  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});
