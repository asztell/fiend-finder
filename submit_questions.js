var sizeOfObject = require('./size_of_object.js');

var submitQuestions = function(FormObject) {
	var answers = {};
	answers.name = FormObject.name;
	answers.photo = FormObject.photo;
	answers.scores = [];

	for (var i = 1; i < sizeOfObject.sizeOfObject(FormObject)-1; i++) {
		answers.scores.push(FormObject[i]);
	}

	return answers;
};

module.exports = {
	submitQuestions : submitQuestions
};