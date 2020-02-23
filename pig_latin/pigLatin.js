function translate(text) {
	isVowel = (letter) => {
		return letter == "a" ||
		letter == "e" ||
		letter == "i" ||
		letter == "o" ||
		letter == "u";
	};

	let final_text = "";
	const array = text.split(" ");

	array.forEach(word => {
        let initial_letter = word[0];
        let index = 1;

        if (isVowel(initial_letter)) {
            final_text += word + "ay";
		} else {
            while (!isVowel(word[index])) {
                index++;
			}

            if (word[index - 1] == "q" && word[index] == "u") {
                index++;
			}

            final_text += word.slice(index, word.length) + word.slice(0, index) + "ay";
        }

        final_text += " ";
	});

    final_text = final_text.slice(0, final_text.length - 1);

    return final_text;
}


module.exports = {
	translate
}

