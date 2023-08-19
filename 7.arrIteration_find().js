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

// numberOver12 = (i) => {
//     return i.name === 'syafiq'
// }

//NOTE: find() return an object 
const aNumOver12 = people.find(function(name){
    return name.id === 'D041211011'
});
console.log(aNumOver12);
