const DOMCreateForm = (() => {
    // console.log('MAKE A FORM')

    const inputForm = document.createElement('div')
    inputForm.classList.add('inputForm') 

    const formContainer = document.createElement('form')
    formContainer.classList.add('formContainer')

    const titleLabel = document.createElement('label')
    titleLabel.setAttribute('for', 'title')
    titleLabel.textContent = 'Title:'
    formContainer.appendChild(titleLabel)

    const titleInput = document.createElement('input')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('id', 'title')
    titleInput.setAttribute('name', 'title')
    formContainer.appendChild(titleInput)

    const descriptionLabel = document.createElement('label')
    descriptionLabel.setAttribute('for', 'description')
    descriptionLabel.textContent = 'Description:'
    formContainer.appendChild(descriptionLabel)

    const descriptionInput = document.createElement('input')
    descriptionInput.setAttribute('type', 'text')
    descriptionInput.setAttribute('id', 'description')
    descriptionInput.setAttribute('name', 'description')
    formContainer.appendChild(descriptionInput)

    inputForm.appendChild(formContainer)

    const createNewTask = document.createElement('button')
    createNewTask.textContent = 'Create New Task'
    inputForm.appendChild(createNewTask)

    document.querySelector('#content').appendChild(inputForm)
})

export default DOMCreateForm;