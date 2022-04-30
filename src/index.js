import './style.css';
import CreateToDoItem from './createToDoItem.js';
// import DOMAppendToDoItem from './DOMAppendToDoItem.js'; DEPRECIATED
import DOMDisplayToDoItems from './DOMDisplayToDoItems.js';
import DOMCreateForm from './DOMCreateForm.js';
import DOMCreateSidebar from './DOMCreateSidebar.js';

// inital DOM Setup
DOMCreateSidebar()
const mainContent = document.createElement('div')
mainContent.classList.add('mainContent')
document.querySelector('#content').appendChild(mainContent)
DOMCreateForm()

const addTask = document.createElement('button')
addTask.classList.add('addTask')
addTask.textContent = 'Add Task'
addTask.addEventListener('click', () => {
    document.querySelector('.inputForm').classList.toggle('hidden')
})
document.querySelector('.mainContent').appendChild(addTask)

const createNewTask = document.createElement('button')
createNewTask.classList.add('createNewTask')
createNewTask.textContent = 'Create New Task'
createNewTask.addEventListener('click', () => {
    // still needs to have input sanitized, new DOMAppend call in if/else statement
    // realistically only need to check that priority is between 1 and 8, if it is make item, else append error message
    let title = document.querySelector('form').title.value
    let description = document.querySelector('form').description.value
    let dueDate = document.querySelector('form').dueDate.value
    let priority = document.querySelector('form').priority.value
    dueDate = (new Date(dueDate)).toLocaleString()

    myToDos.push(CreateToDoItem(title, description, dueDate, priority))
    DOMDisplayToDoItems(myToDos)
    document.querySelector('form').reset()    
})
document.querySelector('.inputForm').appendChild(createNewTask)

let myToDos = []
myToDos.push(CreateToDoItem('Go to the store', 'Buy toilet paper', 'tomorrow', 1))
myToDos.push(CreateToDoItem('Ship a package', 'Go to USPS', 'the next day', 4))
myToDos.push(CreateToDoItem('Doctors appt.', 'Get an xray', 'the next next day', 8))

// myToDos.push(CreateToDoItem('Go to the store', 'Buy toilet paper', 'tomorrow', 1))
// myToDos.push(CreateToDoItem('Ship a package', 'Go to USPS', 'the next day', 2))
// myToDos.push(CreateToDoItem('Doctors appt.', 'Get an xray', 'the next next day', 3))
// myToDos.push(CreateToDoItem('Go to the store', 'Buy toilet paper', 'tomorrow', 4))
// myToDos.push(CreateToDoItem('Ship a package', 'Go to USPS', 'the next day', 5))
// myToDos.push(CreateToDoItem('Doctors appt.', 'Get an xray', 'the next next day', 6))
// myToDos.push(CreateToDoItem('Go to the store', 'Buy toilet paper', 'tomorrow', 7))
// myToDos.push(CreateToDoItem('Ship a package', 'Go to USPS', 'the next day', 8))
DOMDisplayToDoItems(myToDos)

// do some styling
// create sideBar, shoudl have an option to view/create projects
// find a way to organize projects, a project is just an array of a few specific objects
// SANITIZE FORM INPUTS

// immediately append description with the hidden class, add an icon to "expand" each item