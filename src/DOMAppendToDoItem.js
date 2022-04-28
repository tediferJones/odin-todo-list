const DOMAppendToDoItem = ((toDoItem) => {
    // should probably convert to a function, this is pretty repetitive
    const myItem = document.createElement('div')
    myItem.classList.add('toDoItem')

    const priority = document.createElement('div')
    priority.classList.add('itemPriority')
    priority.textContent = toDoItem.priority
    myItem.appendChild(priority)

    const title = document.createElement('div')
    title.classList.add('itemTitle')
    title.textContent = toDoItem.title
    myItem.appendChild(title)

    const description = document.createElement('div')
    description.classList.add('itemDescription')
    description.textContent = toDoItem.description
    myItem.appendChild(description)

    const dueDate = document.createElement('div')
    dueDate.classList.add('itemDueDate')
    dueDate.textContent = toDoItem.dueDate
    myItem.appendChild(dueDate)

    document.querySelector('#content').appendChild(myItem)
})

export default DOMAppendToDoItem;