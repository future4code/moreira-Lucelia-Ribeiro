//Exercicios de interpretação de código (analisar sem rodar o código)

// 1.

/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2]) */

// a) O que será impresso no console?
// Resposta: Matheus Nachtergaele, Virginia Cavendish, Globo (aertei sem olhar)

// 2. 

/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) */

// a) o que vair ser impresso no console?
// Resposta: 
// Nome: Juca idade: 3 raca: SRD
// Nome: Juba idade: 3 raça: SRD
// Nome: Jubo idade: 3 raça: SRD

// b) O que faz a sintaxe dos 3 pontos antes do nome de um objeto?
// Resposta: Copiar o objeto anterior e trazer as mensas informações
// para o proximo

// 3.

/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) */

//a) O que vai ser impresso no console?
// false // null

//b) Explique o valor impresso no console. Você sabe por que isso 
//aconteceu?
// pedimos para imprimir a altura, sendo que não foi declarado

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1 - Resolva os passos a seguir:
// a) Crie um objeto. Ele deve conter duas propriedades: 
// nome (string) e apelidos (um array que sempre terá exatamente 
// três apelidos). Depois, escreva uma função que recebe como 
//entrada um objeto e imprime uma mensagem no modelo abaixo:

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
// mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como
// argumento o novo objeto

/* const pessoa = {
    nome: "Lucelia",
    apelido: ["Lu", "Lud", "Luzinha"]
    }
        
    const pessoaNova = {
    ...pessoa,
    apelido: ["bu", "bubu", "balu"]
    }

    const pessoa1 = (objeto) => {
        console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelido[0]}, ${objeto.apelido[1]}, ${objeto.apelido[2]}`)
    }
    pessoa1(pessoaNova)
 */

// 2. Resolva os passos a seguir:
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//1. O valor de `nome`
//2. O numero de caracteres do valor `nome`
//3. O valor de `idade`
//4. O valor de `profissão`
//5. O numero de caracteres do valor `profissão`

/* const objetoA = {
    nome: "Lucelia",
    idade: 45,
    profissao: "Estudante"
     
}

const objetoB = {
    nome: "Luciane",
    idade: 40,
    profissao: "Nutricionista"
}

const objetos = (objeto) => {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
       
}

objetos(objetoA)
objetos(objetoB)

console.log(objetos(objetoA))
console.log(objetos(objetoB)) */

// 3.

//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes 
//propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de 
//carrinho. Invoque essa função passando os três objetos criados.(push)
//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos

/* const carrinho = []
const frutas = [
    {nome: "cereja", disponibilidade: true},
    {nome1: "banana", disponibilidade: true},
    {nome2: "morango", disponibilidade: false},
]
 const pedido = (fruta) => {
     return carrinho.push(fruta)
 }
 pedido(frutas)
 console.log(carrinho) */