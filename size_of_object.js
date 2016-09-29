var sizeOfObject = function (o) {

	var size = 0;

	for (key in o) {
		if (o.hasOwnProperty(key)) {size++;}
	}

	return size;
};

module.exports = {
	sizeOfObject : sizeOfObject
};