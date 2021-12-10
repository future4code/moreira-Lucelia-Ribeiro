//Exercícios de interpretação de código

//Tente responder os exercícios dessa seção sem executar o código. 
//Se ficar muito difícil, pode rodar no seu computador para analisar 
//e pensar sobre o resultado. 

// 1. Leia o código abaixo

/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  }) */

  //a) O que vai ser impresso no console? A posição no nome, seguido
  //do nome e apelido

  //2. Leia o código abaixo
    
/*    const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) */
  
  // a) O que vai ser impresso no console? Retornara somente o nome de cada pessoa

  // 3. Leia o código abaixo

 /* const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo" 
})

console.log(novoArrayC) */

// a) O que vai ser impresso no console? irá imprimir os dados que não
//tem Chijo
///////////////////////////////////////////////////////////////////////

//Exercícios de escrita de código

//1. Dado o seguinte array de cachorrinhos que são clientes de um 
//pet shop, realize as operações pedidas nos itens abaixo utilizando as 
//funções de array **map** e **filter:**
    
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

//a) Crie um novo array que contenha apenas o nome dos doguinhos

/* let nomeDog = pets.map ((pet) => {
   return pet.nome
   
})
console.log(nomeDog) */


//b) Crie um novo array apenas com os [cachorros salsicha]
//(https://www.youtube.com/watch?v=YQ404vwjzus)

/* let salsicha = pets.filter((tipo) => {
      return tipo.raca === "Salsicha"
})
console.log(salsicha) */

//c) Crie um novo array que possuirá mensagens para enviar para todos os 
//clientes que são poodles. 
//A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para 
//tosar o/a `[NOME]`!"

/* let racaPoodle = pets.filter((tipo) => {
   return tipo.raca === "Poodle"
})
let cupomDesconto = racaPoodle.map((tipo) => {
   return `Você ganhou um cupom de 10% de desconto para tosar o/a ${tipo.nome} !`
})
console.log(cupomDesconto) */

/* Resultados esperados em cada item
    // item A
    [
      "Lupin", 
      "Polly",
      "Madame",
      "Quentinho", 
      "Fluffy", 
      "Caramelo"
    ]
    
    // item B
    [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Quentinho", raca: "Salsicha"}
    ]
    
    // item C
    [
      "Você ganhou um cupom de desconto de 10% para tosar o/a Madame!"
      "Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!"
    ]*/

    //2. Dado o seguinte array de produtos, realize as operações pedidas
    //nos itens abaixo utilizando as funções de array map e filter

    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]
 
//a) Crie um novo array que contenha apenas o nome de cada item

/* let nomeProdutos = produtos.map ((prod) => {
   return prod.nome
}
)
console.log(nomeProdutos) */

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item,
//aplicando 5% de desconto em todos eles

/* let desconto = produtos.map((prod) => {
   return prod.nome + " " + prod.preco * 0.95
})
console.log(desconto) */

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

/* let bebidas = produtos.filter((bebi) => {
   return bebi.categoria === "Bebidas"
})
console.log(bebidas) */

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

let detergente = produtos.filter((sabao) =>{
   return sabao.nome.includes("Ypê")
})
console.log(detergente)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array
// deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"