let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10")

const randomNumber = Math.round(Math.random() * 10) 
//Math é um pacote com funcionalidades matemáticas, .random gera um número real aleatório entre 0 e 1 não incluindo ambos.
//.round arredonda um número real tanto para cima quanto para baixo o tranformando em um número inteiro. Exemplo 1.5 se torna 2, e 1.4 se torna 1.

while(Number(result) != randomNumber) {

}