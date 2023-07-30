let patients = [
    {
        name:"Juninho",
        age: 37,
        weight: 70,
        height: 165,
        sexo: "M",
    },
    {
        name:"Juliana",
        age: 34,
        weight: 60,
        height: 162,
        sexo: "F",
    },
    {
        name:"Miguel",
        age: 11,
        weight: 42,
        height: 150,
        sexo: "M"
    },
    {
        name:"Arthur",
        age: 4,
        weight: 18,
        height: 102,
        sexo: "M"
    }
]

let sexo

let patientsNames = []

for(patient of patients) {
    patientsNames.push(patient.name)
    alert(patientsNames)
}

function printPatient(patient) {
    if (patient.sexo == "M") {
        sexo = "O"
    } else {
        sexo = "A"
    }
    return`
    ${sexo} paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight} quilos e tem ${patient.height} centímetros de altura.`
}

for (let patient of patients) {
    let dataPatient = printPatient(patient)
    alert(dataPatient)
}