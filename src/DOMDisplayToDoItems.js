const DOMDisplayToDoItems = ((toDoArray) => {
    if (document.querySelector('.toDoItems')) {
        document.querySelector('.mainContent').removeChild(document.querySelector('.toDoItems'))
    }
    const toDoItems = document.createElement('div')
    toDoItems.classList.add('toDoItems')
    for (let i in toDoArray) {
        let toDoItem = document.createElement('div')
        toDoItem.classList.add('toDoItem')
        for (let key in toDoArray[i]) {
            let itemAttr = document.createElement('div')
            itemAttr.classList.add(`${key}`)
            itemAttr.textContent = toDoArray[i][key]
            // toDoItem.appendChild(itemAttr)
            if (key === 'priority') {
                toDoItem.prepend(itemAttr)
            } else if (key === 'description') {
                // if key is description add arrow with event listener to append description string to its div
                console.log('expand to show description')
            } else {
                toDoItem.appendChild(itemAttr)
            }
        }
        toDoItems.appendChild(toDoItem)
    }
    document.querySelector('.mainContent').appendChild(toDoItems)
})

export default DOMDisplayToDoItems