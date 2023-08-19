const friend = ["nabil", "atiya", "ummi", "tetta"];
let a = friend[0];
let b = friend[1];
console.log(a, b);

const [e, f] = friend;

let temp;
temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

// easier with destructuring
let c = "ummi";
let d = "tetta";
[c, d] = [d, c];
console.log(c);
console.log(d);
