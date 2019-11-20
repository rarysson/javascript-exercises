const palindromes = function(text) {
	const plainText = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
	const reversedText = plainText.split("").reverse().join("");
	
	return plainText === reversedText;
}

module.exports = palindromes
