let items = [] //Aqui foi criado um vetor vazio

for (let item = 0; item < 10; item++) { //A variavel item recebe 0, enquanto item menor que 10, item recebe + 1. 
    let itemName = prompt(`Digite um item: ${item + 1}`)//A variavel itemName recebe o que foi digitado no prompt e salvo na variavel item da estrutura de repetição.
    items[item] = itemName //O vetor items[] recebe um item em cada posição, que é salvo com o que a variavel itemName recebeu do prompt até o fim da estrutura de repetição.
}

alert(items) //Mostra o vetor com todos os dados salvos da estrutura de repetição em uma janela alert.