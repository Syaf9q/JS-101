const people = [
    {
        id: 1,
        first_name: "Agace",
        last_name: "Watkin",
        email: "awatkin0@ed.gov",
        gender: "Female",
        ip_address: "132.255.184.238",
    },
    {
        id: 2,
        first_name: "Hussein",
        last_name: "Hullins",
        email: "hhullins1@e-recht24.de",
        gender: "Male",
        ip_address: "34.79.0.107",
    },
    {
        id: 3,
        first_name: "Kim",
        last_name: "Tutsell",
        email: "ktutsell2@fotki.com",
        gender: "Male",
        ip_address: "29.220.71.186",
    },
    {
        id: 3,
        first_name: "safiq",
        last_name: "Tutsell",
        email: "ktutsell2@fotki.com",
        gender: "Extraterrestrial",
        ip_address: "29.220.71.186",
    },
    {
        id: 3,
        first_name: "reasd",
        last_name: "Tutsell",
        email: "ktutsell2@fotki.com",
        gender: "Extraterrestrial",
        ip_address: "29.220.71.186",
    },
];

// const peopleGender = people.map((item) => item.gender);
// console.log(peopleGender);

const compGender = new Set(people.map((item) => item.gender));
console.log(["all", ...compGender]);
