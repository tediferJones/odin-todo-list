import extender001 from './extendIcon.png';
import DeleteIcon from './deleteIcon.png';
 
const DOMDisplayToDoItems = ((toDoArray, allProjects) => {
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
            } else if (key === 'dueDate') {
                let timeTillDue = Date.parse(toDoArray[i]['dueDate']) - Date.now()
                itemAttr.textContent = readableTime(timeTillDue)
                mainAttrs.appendChild(itemAttr)
            } else {
                mainAttrs.appendChild(itemAttr)
            }
        }
        
        let extendIcon = new Image();
        extendIcon.src = extender001
        extendIcon.classList.add('extendIcon')
        extendIcon.addEventListener('click', () => {
            details.classList.toggle('hidden')
            details.classList.toggle('shown')
            console.log(mainAttrs.querySelector('.priority').classList.toggle('priorityCorner'))
            mainAttrs.classList.toggle('toggleCorners')
        })
        mainAttrs.appendChild(extendIcon)

        let deleteIcon = new Image()
        deleteIcon.src = DeleteIcon
        deleteIcon.classList.add('deleteIcon')
        deleteIcon.addEventListener('click', () => {
            toDoArray.splice(toDoArray.indexOf(toDoArray[i]), 1)
            localStorage.setItem('allToDos', JSON.stringify(allProjects))
            DOMDisplayToDoItems(toDoArray, allProjects)
        })
        details.appendChild(deleteIcon)

        toDoItem.appendChild(mainAttrs)
        toDoItem.appendChild(details)

        toDoItems.appendChild(toDoItem)
    }
    document.querySelector('.mainContent').appendChild(toDoItems)
})

function readableTime(milliSec) {
    let timeStr = ''
    if (milliSec/86400000 > 365) {
        return 'Over a year'
    } else {
        if (Math.floor(milliSec/86400000) > 0) {
            timeStr += `${Math.floor(milliSec/86400000)}D | `
        }
        if (Math.floor((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24) > 0) {
            timeStr += `${Math.floor((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24)}H | `
        }
        if (Math.floor((((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24) - Math.floor((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24)) * 60) > 1) {
            timeStr += `${Math.floor((((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24) - Math.floor((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24)) * 60)}M`
        }
        return timeStr
    }
}

export default DOMDisplayToDoItems