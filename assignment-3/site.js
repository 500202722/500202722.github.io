console.log('Test Console')

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


const welcome = document.querySelector('#welcome')
if (isMorning) welcome.textContent = 'Good Morning!'
if (isAfternoon) welcome.textContent = 'Good Afternoon!'
if (isEvening) welcome.textContent = 'Good Evening!'