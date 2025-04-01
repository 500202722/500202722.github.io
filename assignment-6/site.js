console.log('Test Console')

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


const welcome = document.querySelector('#welcome')
if (isMorning) welcome.textContent = 'Good Morning!'
if (isAfternoon) welcome.textContent = 'Good Afternoon!'
if (isEvening) welcome.textContent = 'Good Evening!'

localStorage.setItem("It's a secret to everybody.", 'Test message')








const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

const prev = document.querySelector('#buttons>#prev')
const next = document.querySelector('#buttons>#next')
setInterval(() => {
    currentImage++
    showImages()
}, 5000)
prev.addEventListener('click', () => {
    currentImage++
    showImages()
})
next.addEventListener('click', () => {
    currentImage--
    showImages()
})


// save the array in localStorage
// [
//     { "text": "Buy milk", "completed": false },
//     { "text": "Walk the dog", "completed": false },
//     { "text": "Do homework", "completed": false }
// ]




const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector('#new-todo')
const todoButton = document.querySelector('#add-todo')
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = (input = null) => {
    if(input) {
        todos.push({ text: input.value, completed: false })
        localStorage.setItem('todo-list', JSON.stringify(todos))
    }

    todoList.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)
    })
}

document.addEventListener('DOMContentLoaded', () => renderTodos())

todoButton.addEventListener('click', () => {
    if(todoInput.value) {
        renderTodos(todoInput)
    }
})

