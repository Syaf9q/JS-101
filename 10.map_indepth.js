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
    
    const peopleName = people.map((i) => {
        return {
            firstName: i.name.toUpperCase(),
            address: i.address + ', Indonesia'
    
        }
    })