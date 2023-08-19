const button = document.querySelector(".btn");

function debounce() {
    let timeoutID;

    return () => {
        console.log(timeoutID);
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            console.log("you pressed the key");
        }, 2000);

        console.log("hello World");
    };
}

button.addEventListener("click", debounce());
