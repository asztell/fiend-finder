var	jquery = require('jquery');

// var displayMatch = function(match) {

// };

// module.exports = {
// 	displayMatch : displayMatch
// };

var jsdom = require("jsdom").jsdom;
var doc = jsdom('./survey.html', options);
var _window = doc.defaultView;

var displayMatch = function() {
	console.log(_window);	
}

module.exports = {
	displayMatch : displayMatch
};