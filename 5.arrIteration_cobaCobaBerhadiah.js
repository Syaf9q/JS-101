const people = [
    {
        name: 'syafiq',
        class: 19,
        id: 'D041211028'
    },
    {
        name: 'nabil',
        class: 14,
        id: 'D0412110111'
    },
    {
        name: 'syafiq',
        class: 11,
        id: 'D04121102233'
    },
]

//NOTE: PUSING
const charArr = people.map(function(i) {
    return i.id
})
console.log(`mapping dari properti id dari object people`)
console.log(charArr);

const charLength = charArr.map(function(id){
    return id.length;
});
console.log(`mapping dari charArr yang buat array baru untuk string.length`)
console.log(charLength);

// const peopleOver13 = people.filter((name) => {
//     return name.class > 13
// })

// console.log(peopleOver13)