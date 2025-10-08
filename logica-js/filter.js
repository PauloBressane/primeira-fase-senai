 const numeros = [2,5,8,10]

const numerosMaioresQueCinco = numeros.filter(valor => valor>5)
console.log(numerosMaioresQueCinco)

const numerosPares = numeros. filter(valor => valor % 2 === 0)

console.log(numerosPares)

const usuarios = [
    {nome:"João",idade:32},
    {nome:"Maria",idade:15},
    {nome:"Pedro",idade:21}

]

const usuariosMenoresDeIdade = usuarios.filter(usuarios => usuarios.idade<18)
console.log(usuariosMenoresDeIdade)








