import './style.css';
import CreateToDoItem from './createToDoItem.js';
import DOMDisplayToDoItems from './DOMDisplayToDoItems.js';
import DOMCreateForm from './DOMCreateForm.js';
import DOMCreateSidebar from './DOMCreateSidebar.js';

let allProjects = {
    myToDos: []
}

// inital DOM Setup
DOMCreateSidebar(allProjects)
const mainContent = document.createElement('div')
mainContent.classList.add('mainContent')
document.querySelector('#content').appendChild(mainContent)

allProjects['myToDos'].push(CreateToDoItem('Go to the store', 'Buy toilet paper', 'tomorrow', 1))
allProjects['myToDos'].push(CreateToDoItem('Ship a package', 'Go to USPS', 'the next day', 4))
allProjects['myToDos'].push(CreateToDoItem('Doctors appt.', 'Get an xray', 'the next next day', 8))
DOMDisplayToDoItems(allProjects['myToDos'], allProjects)

const addTask = document.createElement('button')
addTask.classList.add('addTask')
addTask.textContent = 'Add Task'
addTask.addEventListener('click', () => {
    if (document.querySelector('.inputForm')) {
        document.querySelector('.inputForm').remove()
    } else {
        DOMCreateForm(allProjects)

        if (document.querySelector('.createNewTask') === null) {
            const createNewTask = document.createElement('button')
            createNewTask.classList.add('createNewTask')
            createNewTask.textContent = 'Create New Task'
            createNewTask.addEventListener('click', () => {
                // still needs to have input sanitized, new DOMAppend call in if/else statement
                // realistically only need to check that priority is between 1 and 8, if it is make item, else append error message
                let title = document.querySelector('.formContainer').title.value
                let description = document.querySelector('.formContainer').description.value
                let dueDate = document.querySelector('.formContainer').dueDate.value
                let priority = document.querySelector('.formContainer').priority.value
                let selectProject = document.querySelector('.formContainer').selectProject.value
                dueDate = (new Date(dueDate)).toLocaleString()

                allProjects[selectProject].push(CreateToDoItem(title, description, dueDate, priority))

                DOMDisplayToDoItems(allProjects[selectProject], allProjects)
                document.querySelector('form').reset()
                document.querySelector('.inputForm').remove()
            })
            document.querySelector('.inputForm').appendChild(createNewTask)
        }
    }
})
document.querySelector('.mainContent').prepend(addTask)

document.querySelector('.newProject').addEventListener('click', () => {
    if (document.querySelector('.newProjectContainer')) {
        document.querySelector('.newProjectContainer').remove()
    } else {
        const newProjectContainer = document.createElement('div')
        newProjectContainer.classList.add('newProjectContainer')

        const projectForm = document.createElement('form')
        projectForm.classList.add('projectForm')

        const projectLabel = document.createElement('label')
        projectLabel.textContent = 'Project Name'
        projectLabel.setAttribute('for', 'projectInput')
        projectForm.appendChild(projectLabel) 

        const projectInput = document.createElement('input')
        projectInput.setAttribute('type', 'text')
        projectInput.setAttribute('id', 'projectInput')
        projectInput.setAttribute('name', 'projectInput')
        projectForm.appendChild(projectInput)

        newProjectContainer.appendChild(projectForm) 

        const createProject = document.createElement('button')
        createProject.textContent = 'Create Project'
        createProject.addEventListener('click', () => {
            allProjects[document.querySelector('.projectForm').projectInput.value] = []

            document.querySelector('.projectsContainer').innerHTML = ''
            for (let key in allProjects) {
                let projectLink = document.createElement('div')
                projectLink.classList.add('projectLink')
                projectLink.textContent = key
                projectLink.addEventListener('click', () => {
                    DOMDisplayToDoItems(allProjects[key], allProjects)
                })
                document.querySelector('.projectsContainer').appendChild(projectLink)
            }

            document.querySelector('.newProjectContainer').remove()
        })
        newProjectContainer.appendChild(createProject)

        document.querySelector('.sidebar').appendChild(newProjectContainer)
    }
})

// SANITIZE FORM INPUTS
// [ DONE ] add button to each item that will remove it from the myToDos array and its project
// [ DONE ] cleaner time stamp idea: subtract dueDate from CurrentDate, get number of milliseconds.
// [ DONE ] then convert milliseconds to "X Days, Y Hours, and Z minutes"
// figure out way to "save" our data so this app can actually be useful!
