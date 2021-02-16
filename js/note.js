// initialise global variables
const submit = document.getElementById('note-btn')
const noteBody = document.getElementById('note-body')
const noteHeading = document.getElementById('note-heading')
const mainContainer = document.querySelector('.wrapper')

// function that returns the new note container of an element
function findContainerAncestor(el) {
    let thisNote = el
    
    while (!thisNote.classList.contains('new-note-container')) {
        thisNote = thisNote.parentElement
    }
    return thisNote
}

// function that creates a new note
submit.addEventListener('click', createNote)

function createNote() {
    // check if note body contains text
    if (noteBody.value === '') {
        alert("You cannot add an empty note.")
    } else {
        // store new note html in template literal
        let newNoteHTML = `<div class="new-note-container">
        <div class="note-separator"></div>
        <div class="new-note-flex-container">             
            <div><input readonly class="new-note-heading" value="${noteHeading.value}"></div>
            <div class="new-btn-container"><span class="edit new-note-btn"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</span>
            <span class="view new-note-btn"><i class="fa fa-eye" aria-hidden="true"></i> View</span>
            <span class="delete new-note-btn"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</span></div>
        </div>
        <textarea readonly class="new-note-body">${noteBody.value}</textarea>
        </div>`

        // append new note container to main container
        mainContainer.insertAdjacentHTML('beforeend', newNoteHTML)

        editNote(), viewNote(), deleteNote()
    }
}

// function that makes a note editable
function editNote() {
    const editList = document.querySelectorAll('.edit')
    const newNoteHeadingList = document.querySelectorAll('.new-note-heading')
    const newNoteBodyList = document.querySelectorAll('.new-note-body')

    // iterate over edit buttons and remove readonly attribute upon click
    editList.forEach((item, i) => {
        editList[i].onclick = () => {
            // check edit buttons data state and set/remove attributes accordingly
            if (item.getAttribute("data-state") != "editable") {
                item.innerHTML = '<i class="fa fa-arrow-right" aria-hidden="true"></i> Save'
                item.setAttribute("data-state", "editable")
                newNoteHeadingList[i].removeAttribute("readonly")
                newNoteBodyList[i].removeAttribute("readonly")
                newNoteHeadingList[i].classList.add('new-note-editable')
                newNoteBodyList[i].classList.add('new-note-editable')
                console.log('data state is "save"')
            } else {
                item.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i> Edit'
                item.setAttribute("data-state", "save")
                newNoteHeadingList[i].setAttribute("readonly", "true")
                newNoteBodyList[i].setAttribute("readonly", "true")
                newNoteHeadingList[i].classList.remove('new-note-editable')
                newNoteBodyList[i].classList.remove('new-note-editable')
                console.log('data state is "editable"')
            }
        }        
    })
}

// function that will display note in the form of a modal
function viewNote(item) {
    // intialise view button list and then convert to an array
    const newNoteBodyList = document.getElementsByClassName('new-note-body')
    const newNoteHeadingList = document.getElementsByClassName('new-note-heading')
    const viewList = document.getElementsByClassName('view')
    const viewArray = Array.apply(null, viewList)
    
    // iterate over list of view buttons
    for (let i = 0; i < viewArray.length; i++) {
        const thisNote = findContainerAncestor(viewArray[i])

        viewArray[i].onclick = () => {
            // create note modal and assign classes to elements 
            const noteModal = document.createElement('div')
            noteModal.classList.add('note-modal')

            // append note modal onto corresponding new note container
            thisNote.appendChild(noteModal)

            // add overlay to note modal
            const overlay = document.getElementById('overlay')
            overlay.style.display = 'block'

            // embed new note within modal
            noteModal.innerHTML = `<div class="note-modal-nav"><h1>${newNoteHeadingList[i].value == undefined ?
                newNoteHeadingList[i - 1] : newNoteHeadingList[i].value}</h1>
                <span class="note-modal-cross"><i class="fas fa-times" aria-hidden="true"></i></span>
                </div><div class="note-modal-separator"></div>
                <div class="note-modal-body">${newNoteBodyList[i].value != undefined ? newNoteBodyList[i].value :
                newNoteBodyList[i - 1]}</div>`

            // iterate over note modal delete buttons and remove modal upon click
            const modalDeleteList = document.querySelectorAll('.note-modal-cross')

            for (item of modalDeleteList) {
                item.onclick = () => {
                    noteModal.remove(noteModal)
                    overlay.style.display = 'none'
                }
            }
        }
    }
}

// function that will enable the removal of a note
function deleteNote(item) {
    const deleteList = document.querySelectorAll('.delete')

    // iterate over delete buttons and remove the new note container upon click
    for (item of deleteList) {
        const thisNote = findContainerAncestor(item)

        item.onclick = () => {
            thisNote.style.display = 'none'
        }
    }
}