const prompt = require('readline-sync')

const numeroSecreto = 7
// const numeroSecreto = Math.floor(Math.random() * 10) + 1 // alterantiva
let chute

do {
    chute = prompt.questionInt("Digite um número de 1 a 10: ")
    if (chute !== numeroSecreto) {
        console.log("Voce errou! Tente novamente!")
    }
} while (chute !== numeroSecreto)

console.log("Parabéns! Você acertou o número secreto!")