const prompt = require("prompt-sync")()

const notaFinal = parseFloat(prompt("Digite a nota final: "))
const frequencia = parseFloat(prompt("digite a frequencia: "))
if(notaFinal >= 7 && frequencia >= 8 ) {
    console.log("aprovado")
} else {
    console.log("reprovado")
}

