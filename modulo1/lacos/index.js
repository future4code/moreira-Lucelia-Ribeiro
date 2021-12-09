//EXERCICIOS DE LAÇO
//Exercicios de interpretação de laços
//
//Tente responder os exercícios dessa seção sem executar o código. 
//Se ficar muito difícil, pode rodar no seu computador para analisar 
//e pensar sobre o resultado.

 //1. O que o código abaixo está fazendo? somando
 // Qual o resultado impresso no console? 10
    
    /* let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor) */
   
    
//2. Leia o código abaixo:
    
  /*   const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    } */
        
    //a) O que vai ser impresso no console? 
    //"os numeros maiores que 18"
    //b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente?
    //Se sim, o que poderia ser usado para fazer isso? Não sei responder essa questão
    
//3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?
    
    /* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }
     */

// Exercicio escrita de código
// 1. 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse 
//dado em uma variável. 
    
    //a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    //b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
          
    //c) Por fim, imprima o array com os nomes dos bichinhos no console

// c) Por fim, imprima o array com os nomes dos bichinhos no console

/* const bichinhos = Number(prompt("Quantos bichinhos você tem?"))
let array = []
function bichos () {
if (bichinhos <= 0){
  console.log("Que pena! Você pode adotar um pet!")
} else if (bichinhos > 0) {
  for (let i = 1; i<=bichinhos; i++){
    const nomes = prompt(`Digite o nome dos seus animais ${i}`)
    array.push(nomes)
    
  }
}
  }

bichos()
console.log(array) */

// 2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso,
//crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
//a) Escreva um programa que **imprime** cada um dos valores do array original.
/* 
const arrayOriginal = [10, 20, 40, 70]
function array1 (array) {
  for (let i = 0; i < array.length; i++){
    console.log(array[i])
  }
}
 array1(arrayOriginal)  */ 

//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

/* const arrayOriginal1 = [10, 20, 40, 70]
function array1 (array) {
  for (let i = 0; i < array.length; i++){
    console.log(array[i] / 10)
  }
}
 array1(arrayOriginal1) */

//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array
//original e **imprima** esse novo array
/* 
const arrayOriginal2 = [10, 21, 40, 70]
for (i = 0; i < arrayOriginal2.length; i++){
  if (arrayOriginal2[i] %2 === 0)
  pares = arrayOriginal2[i]
  console.log(pares)
}
 */
//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
//"O elemento do índex `i` é: `numero`". 
//Depois, **imprima** este novo array.

/* const arrayOriginal3 = [10, 21, 40, 70]
let novaArray = []
  function novaNova (arrayOriginal3){
    for (i = 0; i < arrayOriginal3.length; i++){ 
      novaArray.push(`O elemento do índex ${i} é: ${arrayOriginal3[i]}`)
    
}
  }
  novaNova(arrayOriginal3)
  console.log(novaArray) */

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
/*Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. Inicialize a variável 
//`valorMaximo` com um valor que não seja maior que qualquer valor do array original e a `valorMinimo`
//com um valor que não seja menor que qualquer valor do array original.*/

const arrayOriginal4 = [10, 21, 40, 70]
let maiorNumero = 0
let menorNumero = 71
function maiorMenor (array){
  for (i = 0; i < array.length; i++){
    if (array[i] > maiorNumero){
      maiorNumero = array[i]
    }   
} 
  for (i = 0; i < array.length; i++){
  if (array[i] < menorNumero){
    menorNumero = array[i]
  }

}
}

maiorMenor(arrayOriginal4)
console.log(`O maior nr é ${maiorNumero}, o menor é ${menorNumero}`)

