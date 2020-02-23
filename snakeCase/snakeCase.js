const snakeCase = function(string) {
	if (string.search(/[^a-zA-Z]+/g) === -1) { //only letters
		upperToUnderscoreLower = function(match, offset, string) {
			return (offset ? '_' : '') + match.toLowerCase();
		}

		return string.replace(/[A-Z]/g, upperToUnderscoreLower);
	} else {
		let words = string.split(/[^a-zA-Z]+/g);

		words = words.map(word => word.toLowerCase());
		words = words.join("_");

		if (words[words.length - 1] === "_") {
			words = words.slice(0, words.length - 1);
		}

		return words;
	}
}

module.exports = snakeCase
