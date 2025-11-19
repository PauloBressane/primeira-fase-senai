//arquivo serviços

const servicoWeb = document.querySelector("#servico-web")

const showButton = document.querySelector("#show")

const hideButton = document.querySelector("#Hide")

showButton.addEventListener("click",()=>{
    servicoWeb.classList.add("show")
    servicoWeb.classList.remova("Hide")

})

hideButton.addEventListener("click",()=>{
    servicoWeb.classList.add("Hide")
    servicoWeb.classList.remove("show")
})