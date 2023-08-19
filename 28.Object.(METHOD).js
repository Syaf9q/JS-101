const person = {
    name: "Syafiq",
    age: 20,
    status: "student",
};

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);

const anotherKeys = entries.map((item) => {
    const [first, second] = item;
    return first;
});
console.log(anotherKeys);

for (const item of entries) {
    const [first, second] = item;
    console.log(second);
}
