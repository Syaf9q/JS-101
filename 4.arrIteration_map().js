const people = [
    {
        name: 'syafiq',
        class: 19,
        id: 'D041211028'
    },
    {
        name: 'nabil',
        class: 14,
        id: 'D041211011'
    },
    {
        name: 'syafiq',
        class: 11,
        id: 'D041211022'
    },
]



//NOTE : map() returns an array 
//NOTE : creates a new array from calling a function for every array element.
const newPeeps = people.map(function(person){
    person.nationality = `english`;
    return {
        personal_data: person,
        daily_activities: `doing things ${person.class} times a day`
    };
})
console.log(newPeeps);


// NOTE: usage of array iteration map() in DOM 
const gals = people.map(function(name){
    return `<h1>${name.class}</h1>`
})
console.log(gals)


