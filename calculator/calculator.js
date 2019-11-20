function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	const result = array.reduce(function(total, value) {
		return total + value;
	}, 0);

	return result;
}

function multiply(array) {
	const result = array.reduce(function(total, value) {
		return total * value;
	}, 1);

	return result;
}

function power(base, exp) {
	if (exp <= 1) {
		return base;
	}

	return base * power(base, exp - 1);
}

function factorial(number) {
	if (number <= 1) {
		return 1;
	}

	return number * factorial(number - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}