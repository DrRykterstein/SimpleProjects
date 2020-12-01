// initialise global variables
const btn = document.querySelector('.btn')
const textBody = document.querySelector('.text-body')
const words = document.querySelector('.words-num')
const letters = document.querySelector('.letters-num')
const vowels = document.querySelector('.vowels-num')

// calculates number of words, letters and vowels upon click or keypress
btn.addEventListener('click', calculate)

function calculate(event) {
  if (textBody.value === '') {
    alert("You must type something first!")
  } else {
    calcWords(), calcLetters(), calcVowels()
  }
}

// function that listens for keypress and executes appropriate functions
document.addEventListener('keydown', (event) => {
  if (event.altKey && event.keyCode === 87 && textBody.value !== '') {
    calcWords()
  }

  if (event.altKey && event.keyCode === 76 && textBody.value !== '') {
    calcLetters()
  }

  if (event.altKey && event.keyCode === 86 && textBody.value !== '') {
    calcVowels()
  }
})

// function that calculates number of words in provided text
function calcWords(word) {
  // split string of text into separate substrings with a space delimeter
  const textWords =  textBody.value.split(' ')
  let count = 0

  for (word of textWords) {
    if (word != '') {
      count++
    }
  }
  // insert number of words into appropriate html location
  return words.innerHTML = count
}

// function that calculates number of letters in provided text
function calcLetters(char) {
  let count = 0

  for (char of textBody.value) {
    if (char.toLowerCase() != char.toUpperCase()) {
      count++
    }
  }
  return letters.innerHTML = count
}

// function that calculates number of vowels in provided text
function calcVowels(char) {
  const vowelContainer = document.querySelector('.vowel-array-container')
  const vowelTextBody = document.querySelector('.vowel-text-body')
  let count = 0
  let vowelArray = []

  // iterate over text and increment upon identifying a vowel
  for (char of textBody.value) {
    switch(true) {
      case char == 'a':
        vowelArray.push(char)
        count++
        break
      case char == 'e':
        vowelArray.push(char)
        count++
        break
      case char == 'i':
        vowelArray.push(char)
        count++
        break
      case char == 'o':
        vowelArray.push(char)
        count++
        break
      case char == 'u':
        vowelArray.push(char)
        count++
        break
    }
  }
  if (count > 0) {
    vowelTextBody.value = vowelArray.join(' ')
    vowelContainer.style.display = 'block'
  }

  return vowels.innerHTML = count
}