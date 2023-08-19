//NOTE: SPECIFYING the js type="module" in the html is must
const resp = await fetch("https://www.course-api.com/react-tours-project");
const data = await resp.json();
console.log(data);
