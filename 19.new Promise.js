const button = document.querySelectorAll(".btn");

button.forEach((i) => {
    i.addEventListener("click", () => {
        addColor("h1", 1000, "red").then(() => addColor("li", 1000, "red"));
    });
});

function addColor(selector, time, color) {
    const element = document.querySelector(selector);
    return new Promise((resolve, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, time);
        } else {
            reject(`the ${selector} is non existent`);
        }
    });
}
