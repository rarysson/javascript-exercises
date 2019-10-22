const repeatString = function(text, number) {
    if (number < 0) {
        return "ERROR";
    } else {
        let string = "";

        for (let i = 0; i < number; i++) {
            string += text;
        }

        return string;
    }
}

module.exports = repeatString
