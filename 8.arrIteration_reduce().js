const people = [
    {
        name: 'syafiq',
        class: 19,
        id: 'D041211028',
        job: 'developer',
        salary: 4500,
    },
    {
        name: 'nabil',
        class: 14,
        id: 'D041211011',
        job: 'editor',
        salary: 5500,
    },
    {
        name: 'syafiq',
        class: 11,
        id: 'D041211022',
        job: 'konsumer',
        salary: 2000,
    },
]

//NOTE: reduce() return a single value wether its number,array,object
const totalSalary = people.reduce(function(acc, currValue){
    console.log(`this guy salary ${currValue.salary}`)
    acc+= currValue.id
    console.log(`the total currently: ${acc}`)
    return acc;
},0)

console.log(totalSalary);