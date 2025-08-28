programa {
  funcao inicio() {
    inteiro valor, notas100, notas50, notas20, notas10, notas5, notas2, notas1
    valor= 576
    notas100 = valor /100 // 5
    valor = valor % 100   //76
    notas50 = valor / 50 //1
    valor = valor % 50 //26
    notas20 = valor /20 //1
    notas10 = valor / 10 //0
    valor = valor % 10 //6
    notas5 = valor / 5 //1
    valor = valor % 5 //1
    notas2 = valor / 2 //0
    valor = valor % 2 //1
    notas1 = valor 
    // escreva("valor: r$" + valor)
    escreva("\nNotas r$100:" + notas100)
    escreva("\nNotas r$50:"+ notas50)
    escreva("\nNotas r$20:" + notas20)
    escreva("\nNotas r$10:" + notas10)
    escreva("\nNotas r$5:" + notas5)
    escreva("\nNotasr $2:" + notas2)
    escreva("\nNotal r$1:" + notas1)




    
  }
}
