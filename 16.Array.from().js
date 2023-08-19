// const textNode = document.querySelectorAll('.text');

const items = Array.from({length:80},(_,index) => {
    return index
})

const itemPerPage = 12
const pages = Math.ceil(items.length / itemPerPage);

const newItems = Array.from({length:pages}, (_, index) => {
    const start = index * itemPerPage
    const tempItems = items.slice(start, start + itemPerPage)
    return tempItems
})

console.log(items)
console.log(pages)
console.log(newItems)