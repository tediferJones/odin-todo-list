const DOMCreateSidebar = (() => {
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')

    const welcome = document.createElement('h1')
    welcome.textContent = 'Welcome!'
    sidebar.appendChild(welcome)

    const home = document.createElement('div')
    home.classList.add('home')
    home.textContent = 'Home'
    sidebar.appendChild(home)

    const viewProjects = document.createElement('div')
    viewProjects.classList.add('viewProjects')
    viewProjects.textContent = 'View Projects'
    sidebar.appendChild(viewProjects)

    const newProject = document.createElement('button')
    newProject.classList.add('newProject')
    newProject.textContent = 'Add New Project'
    sidebar.appendChild(newProject)

    document.querySelector('#content').prepend(sidebar)
})

export default DOMCreateSidebar;