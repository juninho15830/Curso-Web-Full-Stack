/*

    Faça um programa que tenha um menu e apresente a seguinte mensagem:

    Olá usuário! Digite a opção desejada

        1. Cadastrar um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa

    ---
    O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

    Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
        Se não houver itens cadastrados, mostrar a mensagem:
            "Não existem itens cadastrados"
    Caso o usuário digite 3, a aplicação deverá ser encerrada.
    
*/

let option
let list = []

while(option != 3){

option = Number(prompt(`Olá usuário! Digite a opção desejada

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`))

    if(option == 1){
        let item = prompt("Digite o nome do item")
        list.push(item)

    } else if(option == 2) {
        if(list.length == 0) {
            alert("Não exitem itens cadastrados")
        } else {
            alert(list)
        }

    } else if(option == 3) {
        alert("Tchau!")
    } else {
        alert("Opção errada. Tente novamente.")
    }
}