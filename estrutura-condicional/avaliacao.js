const prompt = require('readline-sync')

console.log("=== Sistema de Avaliação ===")
console.log("1 - Verificar aprovação")
console.log("2 - Classificar desempenho")
console.log("3 - Sair")

const opcao = prompt.questionInt("Escolha uma opção: ")

switch (opcao) {
    case 1:
        let nota = prompt.questionInt("Digite a nota do aluno de 0 a 10: ")
        if (nota >= 7) {
            console.log("Aluno aprovado!");
        } else {
            console.log("Aluno reprovado!");
        }
        break;
    case 2:
        let nota2 = prompt.questionInt("Digite a nota do aluno de 0 a 10: ")
        if (nota2 >= 9) {
            console.log("Desenpenho: A (Excelente)")
        } else if (nota2 >= 7){
            console.log("Desempenho: B (Bom)")
        } else if (nota2 >= 5) {
            console.log("Desempenho: C (Regular)")
        } else {
            console.log("Desenpenho: D (Ruim)");
        }
        break;
    case 3:
        console.log("Saindo do sistema...")
        break;
    default:
        console.log("Opção inválida!")
    }