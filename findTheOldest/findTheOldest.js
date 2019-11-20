let findTheOldest = function(people) {
    let oldest = people[0];
    let date = new Date();

    people.forEach(person => {
        let currentPerson;
        let nextPerson;

        if (oldest.yearOfDeath === undefined) {
            currentPerson = date.getFullYear() - oldest.yearOfBirth;
        } else {
            currentPerson = oldest.yearOfDeath - oldest.yearOfBirth;
        }

        if (person.yearOfDeath === undefined) {
            nextPerson = date.getFullYear() - person.yearOfDeath;
        } else {
            nextPerson = person.yearOfDeath - person.yearOfBirth;
        }

        if (nextPerson > currentPerson) {
            oldest = person;
        }
    });

    return oldest;
}

module.exports = findTheOldest
