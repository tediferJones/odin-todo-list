import extender001 from './extendIcon.png';

const DOMDisplayToDoItems = ((toDoArray) => {
    if (document.querySelector('.toDoItems')) {
        document.querySelector('.mainContent').removeChild(document.querySelector('.toDoItems'))
    }
    const toDoItems = document.createElement('div')
    toDoItems.classList.add('toDoItems')
    for (let i in toDoArray) {
        let toDoItem = document.createElement('div')
        toDoItem.classList.add('toDoItem')

        let mainAttrs = document.createElement('div')
        mainAttrs.classList.add('mainAttrs')

        let details = document.createElement('div')
        details.classList.add('details')
        for (let key in toDoArray[i]) {
            let itemAttr = document.createElement('div')
            itemAttr.classList.add(`${key}`)
            itemAttr.textContent = toDoArray[i][key]
            if (key === 'priority') {
                let priorityColors = ['red','orangered','goldenrod','orange','gold','lightseagreen','yellowgreen','lightgreen']
                itemAttr.style.backgroundColor = priorityColors[toDoArray[i][key] - 1]
                mainAttrs.prepend(itemAttr)
            } else if (key === 'description') {
                details.classList.add('hidden')
                details.appendChild(itemAttr)
            } else {
                mainAttrs.appendChild(itemAttr)
            }
        }
        
        let extendIcon = new Image();
        extendIcon.src = extender001
        extendIcon.classList.add('extendIcon')
        extendIcon.addEventListener('click', () => {
            details.classList.toggle('hidden')
            mainAttrs.classList.toggle('toggleCorners')
        })
        mainAttrs.appendChild(extendIcon)

        toDoItem.appendChild(mainAttrs)
        toDoItem.appendChild(details)

        toDoItems.appendChild(toDoItem)
    }
    document.querySelector('.mainContent').appendChild(toDoItems)
})

export default DOMDisplayToDoItems