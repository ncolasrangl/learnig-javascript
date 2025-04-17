const readline = require("readline-sync");

let soma = 0;
let numero = Number(readline.question("Digite um número (0 para sair): "));

while (numero !== 0) {
  soma += numero;
  numero = Number(readline.question("Digite outro número (0 para sair): "));
}

console.log("Soma total:", soma);
