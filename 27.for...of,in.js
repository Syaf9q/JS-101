const person = {
    name: "Syafiq",
    age: 20,
    status: "student",
};

const score = [90, 81, 20, 80];

for (const propertyName in person) {
    console.log(`${propertyName} : ${person[propertyName]}`);
}

for (let inc of score) {
    inc += 10;
    console.log(inc);
}
