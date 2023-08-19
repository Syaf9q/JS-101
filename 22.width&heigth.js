const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const head = document.querySelector("h1");

btn.addEventListener("click", () => {
    const dimension = box.getBoundingClientRect();
    head.innerText = dimension.for;
    console.log(dimension);
});
