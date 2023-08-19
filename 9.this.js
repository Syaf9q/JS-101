const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const thisDay = new Date();
let day = days[thisDay.getDay()];
let date = thisDay.getDate();
let month = months[thisDay.getMonth()];
let year = thisDay.getFullYear();

const sentence = `${day}, ${date} ${month} ${year}`;

