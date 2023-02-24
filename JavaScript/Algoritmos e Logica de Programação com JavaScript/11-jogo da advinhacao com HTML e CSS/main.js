//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
/*document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter') {
        handleResetClick()
    }
})*/

//Funções
function handleTryClick(event) {
    event.preventDefault() //não faça o padrão

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Você acertou em ${attempts} tentativas.`

        randomNumber = Math.round(Math.random() * 10)
    }
    
    inputNumber.value = ""
    attempts++
}

function handleResetClick() {
    toggleScreen()
    attempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}