import './style.css';
import CreateToDoItem from './createToDoItem.js';
import DOMAppendToDoItem from './DOMAppendToDoItem.js';
import DOMCreateForm from './DOMCreateForm';

document.querySelector('#content').textContent = 'HELLO'

const addToDo = document.createElement('button')
addToDo.classList.add('addToDo')
addToDo.textContent = 'Add Task'
addToDo.addEventListener('click', () => {
    // need to create a form somewhere, 
    // toggle 'display: hidden' to show/hide the form on button click
})
document.querySelector('#content').appendChild(addToDo)

// console.log(CreateToDoItem('aTitle', 'aDescription', 'tomorrow', 1))
DOMAppendToDoItem(CreateToDoItem('aTitle', 'aDescription', 'tomorrow', 69))
DOMAppendToDoItem(CreateToDoItem('aTitle2', 'aDescription2', 'the next day', 42))
DOMAppendToDoItem(CreateToDoItem('someTitle3', 'someDescription3', 'the next next day', 69))

DOMCreateForm()

// console.log('dooky')