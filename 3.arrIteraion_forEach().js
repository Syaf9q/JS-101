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

//NOTE : seperate function
function showName(name) {
    name.nationality = `English`;
    console.log(name);
}

people.forEach(showName)
