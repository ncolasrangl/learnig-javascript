const prompt = require('prompt-sync')()

let peso = prompt('Digite seu peso: ')
let altura = prompt('Digite sua altura: ')

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

console.log("IMC: " + calcularIMC(peso, altura))
