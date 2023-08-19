const score = [99, 91, 12];

const oldLastDigit = score[score.length - 1];
console.log(oldLastDigit);

//USING AT()
const lastDigit = score.at(-1);
console.log(lastDigit);

const firstDigit = score.at(0);
console.log(firstDigit);

const myName = "Syafiq Yamin";
const charName = myName.at(-1);
console.log(charName);
