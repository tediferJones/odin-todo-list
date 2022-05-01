const DOMCreateSidebar = ((allProjects) => {
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')

    const welcome = document.createElement('h1')
    welcome.textContent = 'Welcome!'
    sidebar.appendChild(welcome)

    // const home = document.createElement('div')
    // home.classList.add('home')
    // home.textContent = 'Home'
    // sidebar.appendChild(home)

    // const viewProjects = document.createElement('div')
    // viewProjects.classList.add('viewProjects')
    // viewProjects.textContent = 'View Projects'
    // sidebar.appendChild(viewProjects)

    // new stuff

    console.log(allProjects)

    const projectsContainer = document.createElement('div')
    projectsContainer.classList.add('projectsContainer')

    for (let key in allProjects) {
        console.log(key)
        let projectLink = document.createElement('div')
        projectLink.classList.add('projectLink')
        projectLink.textContent = key
        projectLink.addEventListener('click', () => {
            // need to call DOMDisplay on allProjects[key]
        })
        projectsContainer.appendChild(projectLink)
    }

    sidebar.appendChild(projectsContainer)

    // end new stuff

    const newProject = document.createElement('button')
    newProject.classList.add('newProject')
    newProject.textContent = 'Add New Project'
    sidebar.appendChild(newProject)

    document.querySelector('#content').prepend(sidebar)
})

export default DOMCreateSidebar;