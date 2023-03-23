/* 
    ** Jogo da adivinhação
    
    Apresente um mensagem ao usuário:
    "Adivinhe o número que estou pensando? Está entre 0 e 10"
    
    Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.
    
    Enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "Erro, tente novamente:"
    
    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você adivinhou o número em x tentativas"
    
    Substitua o "x" da mensagem, pelo número de tentativas

    Caso o usuário acerte o número na primeira tentativa substitua a palavra "tentativas" por "tentativa"
*/

//Math é um pacote com funcionalidades matemáticas, .random gera um número real aleatório entre 0 e 1 não incluindo ambos.
//.round arredonda um número real tanto para cima quanto para baixo o tranformando em um número inteiro. Exemplo 1.5 se torna 2, e 1.4 se torna 1.

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")

const randonNumber = Math.round(Math.random() * 10)

let attempts = 1
let attempt = ""

while (Number(result) != randonNumber){
    result = prompt("Erro, tente novamente:")
    attempts++
}

if (attempts == 1){
    attempt = "tentativa"
} else {
    attempt = "tentativas"
}

alert(`Parabéns! Você adivinhou o número em ${attempts} ${attempt}`)