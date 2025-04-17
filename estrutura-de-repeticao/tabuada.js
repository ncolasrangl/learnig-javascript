const prompt = require('readline-sync')

let numero = prompt.questionInt("Digite um número para ver sua tabuada: ")

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}

console.log("Tabuada finalizada!")