//SPREAD OPERATOR 
// to an array
const friend = ['john','smilga'];
const brother = ['nabil', 'shadiq'];
const sister = 'atiya';

const people = [...friend,...brother,sister]
console.log(people);

//reference to a new string of arrays without overwriting the old one
// copy-ing 
const newPeople = [...people]
newPeople[0] = 'syafiq'
console.log(people);
console.log(newPeople);

// to an object
const person = 
    {
    name:'syafiq',
    age: 20,
    
    }

const newPerson = {...person, city: 'makassar', language:['english','indonesia']}

console.log(person);
console.log(newPerson);

const word = 'syafiq'
console.log([...word])