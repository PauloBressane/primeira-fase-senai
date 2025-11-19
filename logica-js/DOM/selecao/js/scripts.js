//busca

const inputForm = document.querySelector("#busca")

const botaoBusca = document.querySelector("#botaoBuscar")

const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown" ,(e)=>{
    console.log(e.key)
})

inputForm.addEventListener("focus",(e)=>{
    inputForm.style.backgroundColor = "#ff0"
})

inputForm.addEventListener("blur",(e)=>{
    inputForm.style.backgroundColor = ""
})

function searchResult(){
    const valorBusca = inputForm.value.trim()
    if(valorBusca){
        resultadoDiv.textContent = `você buscou por${valorBusca}`
    }else {
        resultadoDiv.textContent = `por favor,insira algo na busca `
    }
}

botaoBusca.addEventListener("click",(e)=>{
    searchResult()
})


//botao de troca de tema

const botaoTrocatema = document.querySelector("#tema")

function alternarTema(){
    document.body.classList.toggle("escuro")
     document.body.classList.toggle("claro")
}

botaoTrocatema.addEventListener("click",(e)=>{
    alternarTema()
})
