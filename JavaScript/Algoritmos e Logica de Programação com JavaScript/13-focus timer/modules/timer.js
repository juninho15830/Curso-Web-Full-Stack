export default function Timer({ //dependencias
    minutesDisplay,
    secondsDisplay,
    resetControls,
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)
    
    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")//convertendo para string eu consigo com padStart preencher uma casa antes dos numeros 9 ao 1. (2, é o tanto de casas e "0" é a string que quero usar)
    }
    
    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    
    function countdown() {
        timerTimeOut = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
    
            updateDisplay(minutes, 0)
    
            if (isFinished) {
                resetControls()
                updateDisplay()    
                return
            }
    
            if (seconds <= 0) {
                seconds = 60
                --minutes
            }
        
            updateDisplay(minutes, String(seconds - 1))
    
            countdown()
        }, 1000)
    }


    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }
    
    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }
}//Este é um padrão de projeto chamado FACTORY, aqui foram colocadas todas as funções de timer, dentro de uma unica função chamda Timer, retornamos um objeto com as funções internas e injetamos as dependencias no começo. 