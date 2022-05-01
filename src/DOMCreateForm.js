const DOMCreateForm = ((allProjects) => {
    // console.log(allProjects)
    const inputForm = document.createElement('div')
    inputForm.classList.add('inputForm')
    // inputForm.classList.add('hidden') 

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

    // REMOVE ME
    titleInput.setAttribute('value', 'sometitle')

    formContainer.appendChild(titleInput)

    const descriptionLabel = document.createElement('label')
    descriptionLabel.setAttribute('for', 'description')
    descriptionLabel.textContent = 'Description:'
    formContainer.appendChild(descriptionLabel)

    const descriptionInput = document.createElement('input')
    descriptionInput.setAttribute('type', 'text')
    descriptionInput.setAttribute('id', 'description')
    descriptionInput.setAttribute('name', 'description')

    // REMOVE ME
    descriptionInput.setAttribute('value', 'someDescription')

    formContainer.appendChild(descriptionInput)

    const dueDateLabel = document.createElement('label')
    dueDateLabel.setAttribute('for', 'dueDate')
    dueDateLabel.textContent = 'Due Date:'
    formContainer.appendChild(dueDateLabel)

    const dueDateInput = document.createElement('input')
    dueDateInput.setAttribute('type', 'datetime-local')// 'text')
    dueDateInput.setAttribute('id', 'dueDate')
    dueDateInput.setAttribute('name', 'dueDate')

    // REMOVE ME
    // dueDateInput.setAttribute('value', 'Tomorrow')

    formContainer.appendChild(dueDateInput)

    const priorityLabel = document.createElement('label')
    priorityLabel.setAttribute('for', 'priority')
    priorityLabel.textContent = 'Priority:'
    formContainer.appendChild(priorityLabel)

    const priorityInput = document.createElement('input')
    priorityInput.setAttribute('type', 'number')//'text')
    // priorityInput.setAttribute('min', '1')
    // priorityInput.setAttribute('max', '8')
    priorityInput.setAttribute('id', 'priority')
    priorityInput.setAttribute('name', 'priority')

    // REMOVE ME
    priorityInput.setAttribute('value', 1)

    formContainer.appendChild(priorityInput)

    // make a thing, append it to formContainer

    const selectProjectLabel = document.createElement('label')
    selectProjectLabel.setAttribute('for', 'selectProject')
    selectProjectLabel.textContent = 'For which project?'
    formContainer.appendChild(selectProjectLabel)

    let selectProjectInput = document.createElement('select')
    selectProjectInput.setAttribute('id', 'selectProject')
    selectProjectInput.setAttribute('name', 'selectProject')
    // THIS DOES NOT REPEAT, ONLY WORKS ONCE
    for (let key in allProjects) {
        console.log(key)
        let projectSelection = document.createElement('option')
        projectSelection.setAttribute('value', key)
        projectSelection.textContent = key
        selectProjectInput.appendChild(projectSelection)
    }

    formContainer.appendChild(selectProjectInput)

    // END TEST AREA

    inputForm.appendChild(formContainer)
    document.querySelector('.mainContent').appendChild(inputForm)
})

export default DOMCreateForm;