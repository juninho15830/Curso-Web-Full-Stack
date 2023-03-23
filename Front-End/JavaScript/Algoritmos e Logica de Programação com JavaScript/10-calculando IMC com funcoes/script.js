/*
    Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima.

    "Paciente X possui o IMC de: Y"

    Onde X é o nome do paciente e Y é o IMC desse paciente.

    Crie ma função para fazer o cálculo de IMC.
*/

const patients = [
    {
        name:"Juninho",
        age: 37,
        weight: 70,
        height: 165,
    },
    {
        name:"Juliana",
        age: 34,
        weight: 60,
        height: 162,
    },
    {
        name:"Miguel",
        age: 11,
        weight: 42,
        height: 150,
    },
    {
        name:"Arthur",
        age: 4,
        weight: 18,
        height: 102,
    }
]

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
    return `
        Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}`
}

for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
}