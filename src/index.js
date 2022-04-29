import './style.css';
import CreateToDoItem from './createToDoItem.js';
// import DOMAppendToDoItem from './DOMAppendToDoItem.js'; DEPRECIATED
import DOMDisplayToDoItems from './DOMDisplayToDoItems.js';
import DOMCreateForm from './DOMCreateForm.js';
import DOMCreateSidebar from './DOMCreateSidebar.js'

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

    myToDos.push(CreateToDoItem(title, description, dueDate, priority))
    DOMDisplayToDoItems(myToDos)
    document.querySelector('form').reset()    
})
document.querySelector('.inputForm').appendChild(createNewTask)

let myToDos = []
myToDos.push(CreateToDoItem('aTitle', 'aDescription', 'tomorrow', 1))
myToDos.push(CreateToDoItem('aTitle2', 'aDescription2', 'the next day', 4))
myToDos.push(CreateToDoItem('someTitle3', 'someDescription3', 'the next next day', 8))
DOMDisplayToDoItems(myToDos)


// do some styling
// create sideBar, shoudl have an option to view/create projects
// find a way to organize projects, a project is just an array of a few specific objects
// SANITIZE FORM INPUTS