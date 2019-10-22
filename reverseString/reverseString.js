const reverseString = function(string) {
    let text = "";

    for (let i = string.length - 1; i >= 0; i--) {
        text += string[i];
    }

    return text;
}

module.exports = reverseString
