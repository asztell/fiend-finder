var sizeOfObject = require('./size_of_object.js');

var findBestMatch = function(answers, friends) {
	var size = sizeOfObject.sizeOfObject(friends);
	var closest_match = null;
	var bestMatchSoFar = 100;

	for (var i = 0; i < size; i++) {
		var difference = 0;

		for (var j = 0; j < answers.length; j++) {
			difference += parseInt(friends[i].scores[j]) - parseInt(answers[j]);
		}

		if(difference < bestMatchSoFar) {
			closest_match = friends[i];
			bestMatchSoFar = difference;
			difference = 0;
		}
	}

	return closest_match;
};

module.exports = {
	findBestMatch : findBestMatch
}