document.body.style.backgroundColor = "#DFCFBE";
const button = document.querySelectorAll(".btn");

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

button.forEach(() => {
    addEventListener("click", () => {
        setTimeout(() => {
            first.style.color = "red";
        }, 500);
        setTimeout(() => {
            second.style.color = "green";
        }, 2000);
        setTimeout(() => {
            third.style.color = "blue";
        }, 5000);
    });
});
