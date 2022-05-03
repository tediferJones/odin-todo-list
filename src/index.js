import './style.css';
import CreateToDoItem from './createToDoItem.js';
import DOMDisplayToDoItems from './DOMDisplayToDoItems.js';
import DOMCreateForm from './DOMCreateForm.js';
import DOMCreateSidebar from './DOMCreateSidebar.js';

let allProjects = {
    myToDos: []
}

if (localStorage.allToDos) {
    allProjects = JSON.parse(localStorage.allToDos)
}

// inital DOM Setup
DOMCreateSidebar(allProjects)
const mainContent = document.createElement('div')
mainContent.classList.add('mainContent')
document.querySelector('#content').appendChild(mainContent)

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
                let title = document.querySelector('.formContainer').title.value
                let description = document.querySelector('.formContainer').description.value
                let dueDate = document.querySelector('.formContainer').dueDate.value
                let priority = Math.floor(document.querySelector('.formContainer').priority.value)
                let selectProject = document.querySelector('.formContainer').selectProject.value
                dueDate = (new Date(dueDate)).toLocaleString()

                if (title.replace(/ /g, '').length > 0 && priority >= 1 && priority < 9) {
                    allProjects[selectProject].push(CreateToDoItem(title, description, dueDate, priority))
                    localStorage.setItem('allToDos', JSON.stringify(allProjects))
 
                    DOMDisplayToDoItems(allProjects[selectProject], allProjects)
                    document.querySelector('form').reset()
                    document.querySelector('.inputForm').remove()
                } else {
                    if (!(document.querySelector('.formError'))) {
                        const formError = document.createElement('div')
                        formError.classList.add('formError')
                        formError.textContent = 'A name and proper priority is required'
                        document.querySelector('.inputForm').appendChild(formError)
                    }
                }
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
            localStorage.setItem('allToDos', JSON.stringify(allProjects))

            document.querySelector('.projectsContainer').innerHTML = ''
            for (let key in allProjects) {
                let projectLink = document.createElement('div')
                projectLink.classList.add('projectLink')
                projectLink.classList.add(key.replace(/ /g, ''))
                projectLink.textContent = key
                projectLink.addEventListener('click', () => {
                    DOMDisplayToDoItems(allProjects[key], allProjects)
                })
                document.querySelector('.projectsContainer').appendChild(projectLink)
            }

            document.querySelector('.newProjectContainer').remove()
        })
        newProjectContainer.appendChild(createProject)
        document.querySelector('.newProjectSuperContainer').appendChild(newProjectContainer)
    }
})

// REMOVE BTN TEST

const removeProject = document.createElement('button')
removeProject.classList.add('removeProject')
removeProject.textContent = 'Remove a Project'
removeProject.addEventListener('click', () => {
    console.log('remove the project')

    if (document.querySelector('.removeFormContainer')) {
        document.querySelector('.removeFormContainer').remove()
    } else {
        const removeFormContainer = document.createElement('div')
        removeFormContainer.classList.add('removeFormContainer')

        const removeForm = document.createElement('form')
        removeForm.classList.add('removeForm')

        const removeLabel = document.createElement('label')
        removeLabel.classList.add('removeLabel')
        removeLabel.textContent = 'Remove which project?'
        removeLabel.setAttribute('for', 'removeProject')
        removeForm.appendChild(removeLabel)

        const removeInput = document.createElement('select')
        removeInput.setAttribute('id', 'removeProject')
        removeInput.setAttribute('name', 'removeProject')
        for (let key in allProjects) {
            console.log(key)
            if (key != 'myToDos') {
            let projectRemoveSelection = document.createElement('option')
            projectRemoveSelection.setAttribute('value', key)
            projectRemoveSelection.textContent = key
            removeInput.appendChild(projectRemoveSelection)
            }
            
        }
        removeForm.appendChild(removeInput)
        removeFormContainer.appendChild(removeForm)

        const removeProjectBtn = document.createElement('button')
        removeProjectBtn.classList.add('removeProjectBtn')
        removeProjectBtn.textContent = 'Remove Project'
        removeProjectBtn.addEventListener('click', () => {
            console.log('REMOVE THE THING')
            let temp = document.querySelector('.removeForm').removeProject.value.replace(/ /g, '')
            console.log(temp)
            document.querySelector(`.${temp}`).remove()
            delete allProjects[document.querySelector('.removeForm').removeProject.value]
            localStorage.setItem('allToDos', JSON.stringify(allProjects))
            console.log(allProjects)
            DOMDisplayToDoItems(allProjects['myToDos'], allProjects)
            document.querySelector('.removeFormContainer').remove()
        })
        removeFormContainer.appendChild(removeProjectBtn)

        document.querySelector('.sidebar').appendChild(removeFormContainer)
    }
})
document.querySelector('.sidebar').appendChild(removeProject)
