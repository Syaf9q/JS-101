const syabila = [
    {
        name: "syafiq",
        age: 20,
        education: {
            SMA: "SmaDA",
            university: {
                bachelor: "University of Hasanuddin",
                name: "unhas",
            },
        },
    },
    {
        name: "Atiya",
        age: 16,
        education: {
            SMA: "MAN",
        },
    },
    {
        name: "Nabil",
        age: 18,
        education: {
            SMA: "SmaDA",
            university: {
                bachelor: "University of Hasanuddin",
                name: "unhas",
            },
        },
    },
];

syabila.forEach((item) => {
    // console.log(
    //     item.education &&
    //     item.education.university &&
    //     item.education.university.bachelor
    //     )

    //OPTIONAL CHAINING | SAME AS ABOVE BUT SIMPLER
    console.log(item.education?.university?.bachelor);
});

const me = "syafiq";
const anotherMe = me.split("").reverse().join("");
console.log(anotherMe);
