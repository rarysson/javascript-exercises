function remove(array, element) {
    return array.filter(el => el !== element);
}

const removeFromArray = function(array, ...arguments) {
    let a = array;

    for (let i = 0; i < arguments.length; i++) {
        a = remove(a, arguments[i]);
    }

    return a;
}

module.exports = removeFromArray
