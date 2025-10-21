// function mostrarMensagem(){
    
//     alert("mensagem")
//     alert("resto da mensagem")
// }

// function executarExercicio(){
//    // let nome = prompt("qual seu mome?")
//   //  alert("ola"+ nome)
//   let 
//   nome = documento.getElementById("entrada").value
//   document.getElementById("resultado").innerHTML = "ola" + nome
// }
 

function efetuarLogin(){
    let resultado = document.getElementById("resultadoLogin")
    let user = document.getElementById("username").value
    if(user=="Paulo"){
        resultado.innerHTML="login com sucesso"
        
    }else{
        resultado.innerHTML = "credenciais incorretas"
}
}