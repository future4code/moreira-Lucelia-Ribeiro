// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Qual altura do retangulo?")
  const largura = prompt("E a latgura?")

  console.log(altura * largura)
  
}
altura (3)
largura (5)


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Em qual ano estamos?")
  const dataNasc = prompt("Em que ano você nasceu?")

  console.log(anoAtual - dataNasc)

}
anoAtual (2021)
dataNasc (1976)

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
 return (peso / (altura * altura))

}
peso (90)
altura (1,70) 

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt ("Digite seu e-mail:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
nome ("Lucelia")
idade (45)
email ("lucelia@gmail.com")


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite duas 3 cores preferidas... Cor 1")
  const cor2 = prompt("Cor 2")
  const cor3 = prompt("Cor 3")

  const cores = [cor1, cor2, cor3]
  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const novaString = string.toUpperCase()

  return(novaString)
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const lucro = custo / valorIngresso
  return lucro

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tam1 = string1.length
  const tam2 = string2.length
 
  return tam1===tam2
}

string1("ola")
string2("olaaa")


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
const elemento = array[0];

return elemento
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const elemento1 = array[array.length -1];
    return elemento1

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let primeiro = array[0]
  let segundo = array[array.length -1]

  return 


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const igualdade = (string1==string2)
  
  return igualdade
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}