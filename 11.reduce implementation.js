let people =[
{
    name: 'Syafiq',
    address: 'Ktl Str 22',
    age: 21
},
{
    name: 'Nabil',
    address: 'Ktl Str 46',
    age: 19
},
{
    name: 'tiya',
    address: 'Ktl Str 58',
    age: 17
},
{
    name: 'ummi',
    address: 'Ktl Str 58',
    age: 44
},
]



const accAge = people.reduce((total, age)=> {
    const {address} = age
    
    // if(total[address])
    //     total[address] += 1
    // else {
    //     total[address] = 1 
    // }

    if(address){
        total[address] = total[address] + 1 || 1
    }
        
        return total
    },{})
// console.log(accAge);