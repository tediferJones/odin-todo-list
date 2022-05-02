import DOMDisplayToDoItems from './DOMDisplayToDoItems.js';

const DOMCreateSidebar = ((allProjects) => {
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')

    const welcome = document.createElement('h1')
    welcome.textContent = 'Welcome!'
    sidebar.appendChild(welcome)

    const projectsContainer = document.createElement('div')
    projectsContainer.classList.add('projectsContainer')

    for (let key in allProjects) {
        let projectLink = document.createElement('div')
        projectLink.classList.add('projectLink')
        projectLink.textContent = key
        projectLink.addEventListener('click', () => {
            DOMDisplayToDoItems(allProjects[key], allProjects)
        })
        projectsContainer.appendChild(projectLink)
    }

    sidebar.appendChild(projectsContainer)

    const newProject = document.createElement('button')
    newProject.classList.add('newProject')
    newProject.textContent = 'Add New Project'
    sidebar.appendChild(newProject)

    document.querySelector('#content').prepend(sidebar)
})

export default DOMCreateSidebar;