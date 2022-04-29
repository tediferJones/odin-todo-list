const DOMCreateSidebar = (() => {
    console.log('SIDEBAR')

    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    sidebar.textContent = 'IM THE SIDEBAR'

    document.querySelector('#content').prepend(sidebar)
})

export default DOMCreateSidebar;