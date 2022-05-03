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
        projectLink.classList.add(key.replace(/ /g, ''))
        projectLink.textContent = key
        projectLink.addEventListener('click', () => {
            DOMDisplayToDoItems(allProjects[key], allProjects)
        })
        projectsContainer.appendChild(projectLink)
    }

    sidebar.appendChild(projectsContainer)

    const newProjectSuperContainer = document.createElement('div')
    newProjectSuperContainer.classList.add('newProjectSuperContainer')

    const newProject = document.createElement('button')
    newProject.classList.add('newProject')
    newProject.textContent = 'Add New Project'
    newProjectSuperContainer.appendChild(newProject)

    sidebar.appendChild(newProjectSuperContainer)

    document.querySelector('#content').prepend(sidebar)
})

export default DOMCreateSidebar;