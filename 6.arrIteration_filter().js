const people = [
    {
        name: 'syafiq',
        class: 19,
        id: 'D041211028',
        job: 'developer',
    },
    {
        name: 'nabil',
        class: 14,
        id: 'D041211011',
        job: 'editor',
    },
    {
        name: 'syafiq',
        class: 11,
        id: 'D041211022',
        job: 'konsumer',
    },
]

//NOTE: The callback function must return a conditional statement
//so it filter the object based of the condition


//NOTE: if given an assignment, e.g. to an object property it'll spit rewrite the property value based of the assignment
//NOTE: filter() return an array
const under18 = people.filter((person) => {
    return person.class < 18; 
})
console.log(under18);

const konsumer = people.filter((person)=>{
    return person.job === 'konsumer';
})
console.log(konsumer);  