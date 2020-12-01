// initialise global variables
const start = document.querySelector('.mem-btn')
const nav = document.querySelector('nav')
const mainMenu = document.querySelector('.main-menu-section')
const gridContainer = document.querySelector('.main-grid-section')
const cardList = document.querySelectorAll('.grid-item')

// function that initialises the start of the game
start.addEventListener('click', initGame)

function initGame(cardArray) {
  // remove match class and re-enable cards if game has previously finished
  if (prevGamePlayed) {
    for (let card of cardList) {
      card.classList.remove('card-match')
      prevGamePlayed = false // re-initialise to default state
      enableCards()
    }
  }

  // remove icons within cards from display
  const iconList = document.querySelectorAll('.fa, .fab, .fas')
  for (let icon of iconList) {
    icon.style.display = 'none'
  }

  // replace main menu with memory grid and change body background color
  mainMenu.style.display = 'none'
  gridContainer.style.display = 'block'
  document.querySelector('body').style.background = 'var(--gridBody)'

  // replace navigation header with score menu
  nav.innerHTML = `<div class="moves-container"><div class="moves-title">Moves: </div>
  <div class="moves-num">0</div></div>`

  // iterate over grid items and display shuffled cards
  const shuffledCardArray = shuffleCards(cardArray)
  tempArray = []

  for (let i = shuffledCardArray.length - 1; i >= 0; i--) {
    // swap inner html of cards and shuffled cards 
    tempArray[i] = shuffledCardArray[i].innerHTML
    shuffledCardArray[i].innerHTML = cardList[i].innerHTML
    cardList[i].innerHTML = tempArray[i]
  }
}

// function that shuffles cards upon game initialisation
function shuffleCards() {
  // modify grid item list into an array
  const cardArray = Array.apply(null, cardList)

  // sort array into random arrangement using fisher yates shuffle algorithm
  let i = cardList.length, randomIndex, tempValue

  while (i != 0) {
    // calculate random index
    randomIndex = Math.floor(Math.random() * i)
    i--
    // swap current index with random index
    tempValue = cardArray[i]
    cardArray[i] = cardArray[randomIndex] 
    cardArray[randomIndex] = tempValue
  }
  return cardArray
}

// initialise every other three cards, opened cards array and counter
let firstCard, secondCard, thirdCard
let openedCards = []
let count = 0, matchedCount = 0

// iterate over sorted cards and run flipCard function upon click
cardList.forEach(card => {
  card.addEventListener('click', flipCard)
})

//  function that flips cards over when clicked
function flipCard() {
  const moves = document.querySelector('.moves-num')
  this.classList.add('card-flip')
  this.firstChild.style.display = 'block' // display icon within card
  count = openedCards.length
  openedCards.push(this) // push clicked card onto array

  if (count < 1) {
    firstCard = this
    this.removeEventListener('click', flipCard) // prevents function from running if same card is clicked multiple times
    count++
  } 
  else if (count === 1) {
    secondCard = this
    count++
  } else {
    thirdCard = this
    moves.innerHTML = parseInt(moves.innerHTML) + 1 // increment move count
    disableCards()

    // check if cards are a match
    if (firstCard.innerHTML === secondCard.innerHTML && firstCard.innerHTML === thirdCard.innerHTML) {
      console.log("cards match")
      cardsMatch()
      matchedCount++

      // display results page after 1500ms if all cards are matched
      if (matchedCount === cardList.length / 3) {
        setTimeout(() => {
          mainMenuRedirect()
        }, 1500)
      }
    } else {
      console.log("cards do not match")
      cardsNoMatch()
    }
  } 
} 

// function that keeps cards in open state if a match is found
function cardsMatch()  {
  setTimeout(() => {
    for (let card of openedCards) {
      card.classList.add('card-match')
    }
    enableCards()
    openedCards.splice(0, openedCards.length) // empty contents of array
  }, 500)
}

// function that returns cards to closed state when there is no match
function cardsNoMatch() {
  setTimeout(() => {
    for (let card of openedCards) {
      card.classList.remove('card-flip')
      card.firstChild.style.display = 'none'
    } 
    enableCards()
    openedCards.splice(0, openedCards.length) // empty contents of array
  }, 800)
}

// function that disables event listeners attatched to all cards
function disableCards() {
  // iterate over all cards and remove event listener
  for (let card of cardList) {
    card.removeEventListener('click', flipCard)
  }
}

// function that enables event listeners attatched to all non-matched cards
function enableCards() {
  // iterate over all cards and re-attatch event listener
  for (let card of cardList) {
    if (!card.classList.contains('card-match')) {
      card.addEventListener('click', flipCard)
    }
  }
}

// initialise variable to check if previous game been played without reload
let prevGamePlayed = false

// function that redirects to main menu screen upon finishing game
function mainMenuRedirect() {
  prevGamePlayed = true

  mainMenu.style.display = 'block'
  gridContainer.style.display = 'none'
  matchedCount = 0 // reset matched count
}