let patients = [
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

let patientsNames = []
let patientsAge = []
let patientsWeight = []
let patientsHeight = []
let patient

for(patient of patients) {
    patientsNames.push(patient.name)
    patientsAge.push(patient.age)
    patientsWeight.push(patient.weight)
    patientsHeight.push(patientsHeight)
}

alert(`O paciente ${patients[0].name} tem ${patients[0].age} anos, pesa ${patients[0].weight} quilos e tem ${patients[0].height} centímetros de altura.`)