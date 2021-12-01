/*EXERCICIOS FIXAÇÃO - STRINGS E ARRAYS

INTERPRETAÇÃO DE CÓDIGOS

1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa

let array
console.log('a. ', array)
A - UNDEFINED (NÃOO DEFINIU VALOR)

array = null
console.log('b. ', array)
B - NULL

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
C - 11

let i = 0
console.log('d. ', array[i])
D - 3

array[i+1] = 19
console.log('e. ', array)
E - [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
*/

////////

// 2 - Leia o código abaixo com atenção:

/* const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) */

/* Qual será o valor impresso no console se a entrada do usuário for:
"Subi num ônibus em Marrocos"
RESPOSTA - SUBI NUM ÔNIBUS EM MIRROCOS, 27 

--------------------

EXERCÍCIOS DE ESCRITA DE CÓDIGO

1.Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, 
Imprima no console a seguinte mensagem:
O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`! 

const emailDoUsuario = prompt("Digite seu e-mail:")
const nomeDoUsuario = prompt("Qual o seu nome?")
console.log(`O email`, emailDoUsuario, `foi cadastrado com sucesso. Seja bem-vinda(o)` , nomeDoUsuario) 

///////

2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
armazenado em uma variável. Em seguida, siga os passos:

a) Imprima no console o array completo
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
seguida por cada uma das comidas, **uma embaixo da outra**.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista */

/* const comidasPreferidas = ["japonesa", "batata", "abobora", "carne", "abobrinha"]
console.log(comidasPreferidas)

let comida1 = ("japonesa")
let comida2 = ("batata")
let comida3 = ("abobora")
let comida4 = ("carne")
let comida5 = ("abobrinha")
console.log("Essas são minhas comidas preferidas:")

console.log ("", comida1)
console.log ("", comida2)
console.log ("", comida3)
console.log ("", comida4)
console.log ("", comida5) */
/* 
let comida1 = ("japonesa")
let comida2 = ("batata")
let comida3 = ("abobora")
let comida4 = ("carne")
let comida5 = ("abobrinha")

let comidaMaisPreferida = prompt("Qual sua comida preferida?")

comida2 = comidaMaisPreferida

console.log("Essas são minhas comidas preferidas:")

console.log ("", comida1)
console.log ("", comida2 = comidaMaisPreferida)
console.log ("", comida3)
console.log ("", comida4)
console.log ("", comida5) */















