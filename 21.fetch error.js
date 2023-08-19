const url = "https://www.course-api.com/react-tours-project";

const getData = async () => {
    try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
            const msg = `There was an error ${resp.status} ${resp.statusText}`;
            throw new Error(msg);
        }
        const data = await resp.json();
        console.log(data);
        // const data = await resp.json();
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
};

const button = document.querySelector(".btn");
button.addEventListener("click", getData);
