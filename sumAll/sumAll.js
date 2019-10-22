const sumAll = function(min, max) {
    let sum = 0;

    if (min < 0 || max < 0 ||
        typeof(min) != "number" ||
        typeof(max) != "number") {
        return "ERROR";
    }

    if (min > max) {
        let tmp = min;
        min = max;
        max = tmp;
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll
