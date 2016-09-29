var express 		= require('express'),
	fs 				= require('fs'),
	bodyParser 		= require('body-parser'),
	path 			= require('path'),
	submitqs		= require('./submit_questions.js'),
	findBestMatch 	= require('./find_best_match.js'),
	displayMatch	= require('./display_match.js'),
	friends			= require('./api/friends.json');

var app = express();
var PORT = 80;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// app.set('port', (process.env.PORT || 5000));

// // app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/survey', function(req, res) {
  res.sendFile(path.join(__dirname, 'survey.html'));
});

app.get('/api/friends', function(req, res) {
  res.sendFile(path.join(__dirname, '/api/friends.json'));
});

app.post('/survey', function(req, res) {
	// console.log(JSON.stringify(req.body));
	// res.send(req.body.name);
	var answers = submitqs.submitQuestions(req.body);
	// console.log(answers);
	console.log(findBestMatch.findBestMatch(answers.scores, friends));
	// displayMatch.displayMatch();
});

app.listen(PORT, function() {
  console.log('Node app is running on port', PORT);
});
