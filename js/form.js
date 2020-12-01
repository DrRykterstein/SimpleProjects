// initialise global variables
const form = document.getElementById('form')
const usernameContainer = document.querySelector('.username-container')
const passwordContainer = document.querySelector('.password-container')
const username = document.getElementById('username-input')
const password = document.getElementById('password-input')
const submit = document.getElementById('submit')

// remove inserted adjacent HTML if currently exists
function insertedContentExists() {
  let insertedContent = document.querySelectorAll('.invalid-input')

  for (let item of insertedContent) {
    if (item) {
      item.remove()
      console.log("exists")
    } else {
      console.log('does not exist')
    }
  }
}

// function that initiates form authentication upon clicking submit
submit.addEventListener('click', submitForm) 

function submitForm(event) {
  event.preventDefault() // prevent page reload upon clicking submit button

  // initiate username authentication
  username.value.length < 3 || username.value.length > 20 ? 
    usernameBoundsFailed() : handleUsername()

  // initiate password authentication
  password.value.length < 6 || password.value.length > 30 ?
    passwordBoundsFailed() : handlePassword() 
}

// notifies user if password is outside of bounds
function usernameBoundsFailed() {
  insertedContentExists()

  // add red border and display invalid message
  username.classList.add('invalid-border')
  usernameContainer.insertAdjacentHTML('afterend', 
    `<p class="invalid-input">Username must fall between 3 and 20 characters.</p>`)
}

function usernameInvalid() {
  insertedContentExists()

  // add red border and display invalid message
  username.classList.add('invalid-border')
  usernameContainer.insertAdjacentHTML('afterend', 
    `<p class="invalid-input">Invalid username. Must contain letters, numbers and underscores only.</p>`)
}

function passwordInvalid() {
  // add red border and display invalid message
  password.classList.add('invalid-border')
  passwordContainer.insertAdjacentHTML('afterend', 
    `<p class="invalid-input">Invalid Password. Must contain at least one letter, capital letter, 
      number and special character excluding spaces.</p>`)
}

// notifies user if username is outside of bounds
function passwordBoundsFailed() {
  // add red border and display invalid message
  password.classList.add('invalid-border')
  passwordContainer.insertAdjacentHTML('afterend', 
    `<p class="invalid-input">Password must fall between 6 and 30 characters.</p>`)
}

// authenticates username
function handleUsername() {
  // iterate over username and ensure only letters and numbers are used
  for (let char of username.value) {
    if (char.toLowerCase() == char.toUpperCase() && parseInt(char) != char && char != '_') {
      return usernameInvalid()
    } 
  }
  insertedContentExists()
  username.classList.remove('invalid-border')
}

// function that authenticates password
function handlePassword() {
  /* iterate over password and ensure at least one letter, 
    capital letter, number and special character are present */
  let letterCount = 0
  let upperLetterCount = 0
  let numberCount = 0
  let specialCount = 0

  for (let char of password.value) {
    if (char == ' ') {
      return passwordInvalid()
    } else {
      switch(true) {
        case char.toLowerCase() != char.toUpperCase() && char.toUpperCase() == char: // check for capital letter
          upperLetterCount++
          break
        case char.toLowerCase() != char.toUpperCase(): // check for letter
          letterCount++
          break
        case parseInt(char) == char: // check for number
          numberCount++
          break
        default:
          specialCount++ // check for special character (not alpha/numeric)
      }
    }
  }
  letterCount < 1 || upperLetterCount < 1 || numberCount < 1 || specialCount < 1 
    ? passwordInvalid() : password.classList.remove('invalid-border')
}