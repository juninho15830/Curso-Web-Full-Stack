const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff= document.querySelector('.sound-off')
let timerTimeOut
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

function resetControls() {
    buttonSet.classList.remove('hide')
    buttonStop.classList.add('hide')
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")//convertendo para string eu consigo com padStart preencher uma casa antes dos numeros 9 ao 1. (2, é o tanto de casas e "0" é a string que quero usar)
}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countdown() {
    timerTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(minutes, 0)

        if (minutes <= 0) {
            resetControls()    
            return
        }

        if (seconds <= 0) {
            seconds = 3
            --minutes
        }
    
        updateTimerDisplay(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    countdown()

})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function() {
    resetControls()
    resetTimer()
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
        resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})