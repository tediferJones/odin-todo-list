const DOMCreateForm = ((allProjects) => {
    const inputForm = document.createElement('div')
    inputForm.classList.add('inputForm')

        const formContainer = document.createElement('form')
        formContainer.classList.add('formContainer')

            const titleInputContainer = document.createElement('div')
            titleInputContainer.classList.add('inputContainer')

                const titleLabel = document.createElement('label')
                titleLabel.setAttribute('for', 'title')
                titleLabel.textContent = 'Title:'

            titleInputContainer.appendChild(titleLabel)

                const titleInput = document.createElement('input')
                titleInput.setAttribute('type', 'text')
                titleInput.setAttribute('id', 'title')
                titleInput.setAttribute('name', 'title')
                titleInput.setAttribute('placeholder', 'Required')

            titleInputContainer.appendChild(titleInput)

        formContainer.appendChild(titleInputContainer)

            const descriptionInputContainer = document.createElement('div')
            descriptionInputContainer.classList.add('inputContainer')

                const descriptionLabel = document.createElement('label')
                descriptionLabel.setAttribute('for', 'description')
                descriptionLabel.textContent = 'Description:'

            descriptionInputContainer.appendChild(descriptionLabel)

                const descriptionInput = document.createElement('input')
                descriptionInput.setAttribute('type', 'text')
                descriptionInput.setAttribute('id', 'description')
                descriptionInput.setAttribute('name', 'description')

            descriptionInputContainer.appendChild(descriptionInput)

        formContainer.appendChild(descriptionInputContainer)

            const dueDateInputContainer = document.createElement('div')
            dueDateInputContainer.classList.add('inputContainer')

                const dueDateLabel = document.createElement('label')
                dueDateLabel.setAttribute('for', 'dueDate')
                dueDateLabel.textContent = 'Due Date:'

            dueDateInputContainer.appendChild(dueDateLabel)

                const dueDateInput = document.createElement('input')
                dueDateInput.setAttribute('type', 'datetime-local')
                dueDateInput.setAttribute('id', 'dueDate')
                dueDateInput.setAttribute('name', 'dueDate')

            dueDateInputContainer.appendChild(dueDateInput)

        formContainer.appendChild(dueDateInputContainer)

            const priorityInputContainer = document.createElement('div')
            priorityInputContainer.classList.add('inputContainer')

                const priorityLabel = document.createElement('label')
                priorityLabel.setAttribute('for', 'priority')
                priorityLabel.textContent = 'Priority:'

            priorityInputContainer.appendChild(priorityLabel)

                const priorityInput = document.createElement('input')
                priorityInput.setAttribute('type', 'number')
                priorityInput.setAttribute('id', 'priority')
                priorityInput.setAttribute('name', 'priority')
                priorityInput.setAttribute('max', '8')
                priorityInput.setAttribute('min', '1')
                priorityInput.setAttribute('placeholder', '1 - 8')

            priorityInputContainer.appendChild(priorityInput)

        formContainer.appendChild(priorityInputContainer)

            const selectProjectInputContainer = document.createElement('div')
            selectProjectInputContainer.classList.add('inputContainer')

                const selectProjectLabel = document.createElement('label')
                selectProjectLabel.setAttribute('for', 'selectProject')
                selectProjectLabel.textContent = 'For which project?'
                
            selectProjectInputContainer.appendChild(selectProjectLabel)

                let selectProjectInput = document.createElement('select')
                selectProjectInput.setAttribute('id', 'selectProject')
                selectProjectInput.setAttribute('name', 'selectProject')
                for (let key in allProjects) {
                    let projectSelection = document.createElement('option')
                    projectSelection.setAttribute('value', key)
                    projectSelection.textContent = key
                    selectProjectInput.appendChild(projectSelection)
                }
                
            selectProjectInputContainer.appendChild(selectProjectInput)

        formContainer.appendChild(selectProjectInputContainer)

    inputForm.appendChild(formContainer)
    document.querySelector('.mainContent').appendChild(inputForm)
})

export default DOMCreateForm;