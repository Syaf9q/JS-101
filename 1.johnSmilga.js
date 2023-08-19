function calculator(value){
    return value*2.54
}
const color = ['red','blue','yellow','green']
for(var i = 0 ; i < document.querySelectorAll('.btn').length; i++){

    document.querySelectorAll('.btn')[i].addEventListener('click', () => {
    let randomizedColor = Math.floor(Math.random()*4)
    document.querySelector('h1').innerHTML = 'hello',
    document.querySelector('h1').style.color = color[randomizedColor]
    setTimeout(() => document.querySelector('h1').innerHTML = 'Hello World!', 1000)
    }
    )
}

/* THE FULLNAME EXERCISE*/
const names = ['anna', 'sussy', 'bob', 'syafiq'];
const lastName = 'shakeandbake';
let fullName = [];

for (let i = 0; i < names.length; i++){

    fullName.push(`${names[i]} ${lastName}`);
    console.log(i)
}
console.log(fullName);

let dia = [20,30,55]
let aku = [40,20,10]

calcAll = (arr) => {
    let val = 0;

    for(let i = 0; i < arr.length; i++){
        
        val += arr[i];
    }
    if (val > 100){
        console.log(`Whoa, you spent too much!`);
        return val;
    }
    console.log(`You spent wisely :)`);
    return val;
}

const diaTotal = calcAll(dia)
const akuTotal = calcAll(aku)

console.log({
    valDia:diaTotal, 
    valAku:akuTotal
})
