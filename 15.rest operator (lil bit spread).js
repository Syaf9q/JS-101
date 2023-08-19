// REST OPERATOR

const friend = ['john','smilga'];
const brother = ['nabil', 'shadiq'];
const sister = 'atiya';

const people = [...friend,...brother,sister];

const [first, ...restOfPeople] = people
console.log(first,restOfPeople)
const specificPeople = restOfPeople.find((person)=>
    person === 'nabil'
);

console.log(specificPeople)

const person = {
    name: 'syafiq',
    age: 20,
    origin: 'Gowa'
}

const {origin, ...rest} = person
console.log(origin,rest)


function studentAvg(name, ...scores){
    console.log(name)
    console.log(scores)
    const average = scores.reduce((total, score)=>{
        total += score
        return total
    },0)/scores.length
    console.log(scores.length)
    console.log(average)
}

studentAvg('nabil',90,32,12,49,90)


const anotherScore = [90,43,12,45]
studentAvg(person.name, ...anotherScore) // rest operator