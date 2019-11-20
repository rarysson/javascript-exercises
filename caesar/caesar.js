const caesar = function(text, cipher) {
    let result = "";

    cipher = (cipher < 0) ? (26 + cipher) % 26 : cipher;

    text.split("").forEach(word => {
        if (word.search(/[^a-zA-Z]/) != -1) {
            result += word;
        } else {
            let code = word.charCodeAt();
            const minUpper = 'A'.charCodeAt();
            const maxUpper = 'Z'.charCodeAt();
            const minLower = 'a'.charCodeAt();
            const maxLower = 'z'.charCodeAt();

            if (code >= minUpper && code <= maxUpper) {
                code = (code - minUpper + cipher) % 26 + minUpper;
            } else {
                code = (code - minLower + cipher) % 26 + minLower;
            }

            result += String.fromCharCode(code);
        }
    });

    return result;
}

module.exports = caesar;
