import './style.css';
import CreateToDoItem from './createToDoItem.js';
// import DOMAppendToDoItem from './DOMAppendToDoItem.js'; DEPRECIATED
import DOMDisplayToDoItems from './DOMDisplayToDoItems.js';
import DOMCreateForm from './DOMCreateForm.js';
import DOMCreateSidebar from './DOMCreateSidebar.js';

let allProjects = {
    myToDos: []
}

// inital DOM Setup
DOMCreateSidebar(allProjects) // pass allProjects to DOMCreateSideBar(), so it can create the appropiate sidebar links
const mainContent = document.createElement('div')
mainContent.classList.add('mainContent')
document.querySelector('#content').appendChild(mainContent)

allProjects['myToDos'].push(CreateToDoItem('Go to the store', 'Buy toilet paper', 'tomorrow', 1))
allProjects['myToDos'].push(CreateToDoItem('Ship a package', 'Go to USPS', 'the next day', 4))
allProjects['myToDos'].push(CreateToDoItem('Doctors appt.', 'Get an xray', 'the next next day', 8))
DOMDisplayToDoItems(allProjects['myToDos'])

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
                // NO SHIT YOU GOTTA PULL THE PROJECT INFO TO ADD IT TO THE RIGHT PROJECT
                let selectProject = document.querySelector('.formContainer').selectProject.value
                dueDate = (new Date(dueDate)).toLocaleString()

                // all tasks go to myToDos, but if a project is selected, it will also display there
                allProjects['myToDos'].push(CreateToDoItem(title, description, dueDate, priority))
                if (selectProject != 'myToDos') {
                    console.log('DO THE THINGS')
                    allProjects[selectProject].push(CreateToDoItem(title, description, dueDate, priority))
                }

                DOMDisplayToDoItems(allProjects['myToDos'])
                document.querySelector('form').reset()
                document.querySelector('.inputForm').remove()// classList.toggle('hidden')
            })
            document.querySelector('.inputForm').appendChild(createNewTask)
        }
    }
})
document.querySelector('.mainContent').prepend(addTask) // appendChild(addTask)

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
            // DOMUpdateSidebar(allProjects)
            // GENERATE AN ELEMENT IN THE SIDEBAR THAT WHEN CLICKED, WILL RUN DOMDisplayToDoItems(allProjects['WHATEVER'])
            // DONT PUT THAT LOGIC HERE, PUT IT IN THE DOMCreateSidebar MODULE
            // conside what will happen loading a file, we want the sidebar to generate a div for
            // each key in allProjects object, that will DOMDisplay(thatSpecificArray)

            document.querySelector('.projectsContainer').innerHTML = ''
            for (let key in allProjects) {
                console.log(key)
                let projectLink = document.createElement('div')
                projectLink.classList.add('projectLink')
                projectLink.textContent = key
                projectLink.addEventListener('click', () => {
                    // need to call DOMDisplay on allProjects[key]
                    console.log(allProjects[key])
                    DOMDisplayToDoItems(allProjects[key])
                })
                document.querySelector('.projectsContainer').appendChild(projectLink)
            }

            document.querySelector('.newProjectContainer').remove()
        })
        newProjectContainer.appendChild(createProject)

        document.querySelector('.sidebar').appendChild(newProjectContainer)
    }
})



// let allProjects = {
//     myToDos: []
// }

// allProjects['myToDos'].push(CreateToDoItem('Go to the store', 'Buy toilet paper', 'tomorrow', 1))
// allProjects['myToDos'].push(CreateToDoItem('Ship a package', 'Go to USPS', 'the next day', 4))
// allProjects['myToDos'].push(CreateToDoItem('Doctors appt.', 'Get an xray', 'the next next day', 8))
// DOMDisplayToDoItems(allProjects['myToDos'])

// myToDos.push(CreateToDoItem('Go to the store', 'Buy toilet paper', 'tomorrow', 1))
// myToDos.push(CreateToDoItem('Ship a package', 'Go to USPS', 'the next day', 2))
// myToDos.push(CreateToDoItem('Doctors appt.', 'Get an xray', 'the next next day', 3))
// myToDos.push(CreateToDoItem('Go to the store', 'Buy toilet paper', 'tomorrow', 4))
// myToDos.push(CreateToDoItem('Ship a package', 'Go to USPS', 'the next day', 5))
// myToDos.push(CreateToDoItem('Doctors appt.', 'Get an xray', 'the next next day', 6))
// myToDos.push(CreateToDoItem('Go to the store', 'Buy toilet paper', 'tomorrow', 7))
// myToDos.push(CreateToDoItem('Ship a package', 'Go to USPS', 'the next day', 8))

// SANITIZE FORM INPUTS
// add button to each item that will remove it from the myToDos array and its project
// cleaner time stamp idea: subtract dueDate from CurrentDate, get number of milliseconds.
// then convert milliseconds to "X Days, Y Hours, and Z minutes"
// figure out way to "save" our data so this app can actually be useful!
