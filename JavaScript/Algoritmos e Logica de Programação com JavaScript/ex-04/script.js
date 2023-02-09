let student = prompt("Qual o nome do alúno?")

let n1 = prompt("Resultado da primeira prova:")
let n2 = prompt("Resultado da segunda prova:")
let n3 = prompt("Resultado da terceira prova:")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if(result) {
    alert(`Parabéns ${student}, você foi aprovado(a). Sua média é ${average}`)
} else if (average <= 3) {
    alert(`Sinto muito ${student}, você foi reprovado(a). Sua média é ${average}.`)
} else {
    alert(`${student}, estude para a prova de recuperação. Sua média é ${average}.`)
}