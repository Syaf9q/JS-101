/*CALLBACK FUNCTION & HIGHER ORDER FUNCTION*/

//NOTE: Function that takes other function as parameter
greet = (name, myName, callback) => {    // THIS IS HIGHER ORDER FUNCTION
    return(`${callback(name)}, my name is ${myName}`)                
}

//NOTE: Function that passed to other function 
morning = (name) => {   //THIS IS CALLBACK FUNCTION
    return (`Good Morning ${name.toUppercase()}`)  
}                                                            

evening = (name) => {
    return (`Good Evening ${name.toUpperCase()}`)
}

// GLOBAL SCOPE & LOCAL SCOPE

let hej = 'syafiq';
nameVal = () => {
    const hej = 'retard';
    return hej;
}

