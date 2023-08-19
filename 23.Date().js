let people = [];
let now = Date.now();

people = [...people, { id: Date.now(), name: "peter" }];

setTimeout(() => {
    people = [...people, { id: Date.now(), name: "sumigo" }];
    console.log(people);
}, 100);

//MAKING ID USING THE DATE
