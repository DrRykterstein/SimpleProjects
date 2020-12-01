// note-to-self: Structure in an object oriented fashion
class Countdown {
  // instantiate a blueprint for our class
  constructor() {
    this.submit = document.getElementById('submit')
    this.date = document.getElementById('date')
    this.time = document.getElementById('time')
    this.hours = document.getElementById('hours')
    this.minutes = document.getElementById('minutes')
    this.seconds = document.getElementById('seconds')
    this.milliseconds = document.getElementById('milliseconds')
    this.initialised = false
    this.events()
  }

  // events (button click, keypress...)
  events() {
    this.submit.addEventListener('click', () => {
      // refresh page if countdown has already initialised
      if (this.initialised) document.location.reload() 

      if (this.date.value == '' || this.time.value == '') {
        alert("You must fill in both input fields")
      } else {
        // initialise current date and target date
        const today = new Date().toString()
        const currentDate = Date.parse(today.slice(-0, 24))

        const targetDateString = date.value.toString() + ' ' + time.value.toString()
        const targetDate = Date.parse(targetDateString)

        const startTime = targetDate - currentDate

        // convert date as milliseconds into hrs, mins and secs accordingly
        let hours = startTime / (1000 * 60 * 60)
        let absHours = Math.floor(hours)

        let minutes = (hours - absHours) * 60
        let absMinutes = Math.floor(minutes) 

        let seconds = (minutes - absMinutes) * 60
        let absSeconds = Math.floor(seconds)

        this.hours.innerHTML = absHours
        this.minutes.innerHTML = absMinutes
        this.seconds.innerHTML = absSeconds

        this.initialised = true // event has been initialised

        setInterval(() => {
          this.updateCountdown()
        }, 1000)
      }
    })
  }

  updateCountdown() {
    if (this.hours.innerHTML == 0 && this.minutes.innerHTML == 0 && this.seconds.innerHTML == 0) {
      throw new Error("The Countdown has ended.")
    }

    if (this.minutes.innerHTML == 0) {

      if (this.hours.innerHTML != 0) {
        this.hours.innerHTML--
        this.minutes.innerHTML = 59
      }
    }

    if (this.seconds.innerHTML == 0) {
      this.minutes.innerHTML--
      this.seconds.innerHTML = 59
    } else {
      this.seconds.innerHTML-- // decrement seconds
    }
  }
}

// initialise our class within an object
const countdown = new Countdown()