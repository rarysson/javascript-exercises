const getTheTitles = function(books) {
    const result = books.reduce(function(total, book) {
        total.push(book.title);

        return total;
    }, []);

    return result;
}

module.exports = getTheTitles;
