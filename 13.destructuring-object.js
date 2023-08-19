const person = {
    firstName: "Syafiq",
    lastName: "Yamin",
    city: "Gowa",
    siblings: {
        sister: "atiya",
        brother: "nabil",
    },
};

const {
    firstName,
    siblings: { sister: favoriteSibling },
    zip,
} = person;
console.log(firstName, favoriteSibling, zip);

function printPerson({ firstName, lastName, siblings: { brother } }) {
    console.log(firstName, lastName, brother);
}
printPerson(person);

//same thing with above, but more efficient, no need to declare
function personPrint(person) {
    const { firstName, lastName } = person;
    console.log(firstName, lastName);
}

personPrint(person);
