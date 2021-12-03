/* Tente responder os exercícios dessa seção sem executar o código. 
Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

1. Leia o código abaixo*/
   /*  
    function minhaFuncao(variavel) {
    	return variavel * 5
    }
    
    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10)) */
       
    /*a) O que vai ser impresso no console?
    10 e 50
    
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a 
    função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
    Não funcionará e  no console aparecerá erro*/

    
 
/* 2. Leia o código abaixo */

/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */

/* a. Explique o que essa função faz e qual é sua utilidade
Ela coloca o texto em caixa baixa, caso o usuário digite diferente, ele padroniza
procura na frase a palavra "cenoura" e retorna falso ou verdadeiro

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura` - true
     ii.  `CENOURA é bom pra vista` - true
     iii. `Cenouras crescem na terra` - true 
     
---------------------------------------------------*/   


/* 
EXERCICIOS DE ESCRITA DE CODIGO

1. Escreva as funções explicadas abaixo:
a) A função não deve receber nenhum parâmetro e deve imprimir uma
mensagem falando algumas informações sobre você, como: 

"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
 Lembrando que a função não possui entradas, apenas imprime essa mensagem.*/

/* const nome = 'Lucelia'
const idade = '45'
const cidade = 'São José'
const estuda = 'estudante'

const dadosCadastrais = () => {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em  ${cidade}, e sou ${estuda}`)
}
dadosCadastrais () */


/* b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações
de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma 
profissão (`string`). Ela deve retornar uma `string` que unifique
todas as informações da pessoa em uma só mensagem com o template:

Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO]. */ 

/* const dadosPessoais = (nome, idade, cidade, profissão) => {
    return (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissão}`)
    }
    console.log(dadosPessoais("Lucelia", 45, "Sao Jose", "Devenvolvedora")) */
        

/*///////////////////////

2. Escreva as funções explicadas abaixo:*/

    /*a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função,
    faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no
    console o resultado.*/

    /* const soma = (numero1, numero2) => {
        return numero1 + numero2
    }
    console.log(soma(800, 300)) */

    
    /* b) Faça uma função que recebe 2 números e retorne um booleano que informa se o
    primeiro número é **maior ou igual** ao segundo. */

/* const maiorIgual = (numero1, numero2) => {
    return numero1 >= numero2
} 
    console.log(maiorIgual(35, 40)) */

    /* c) Escreva uma função que receba um número e devolva um booleano indicando se ele é
    par ou não */

    /* const parNao = (numero) => {
        return numero % 2 === 0
    }
    console.log(parNao(4))
 */
    
    /* d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o
    tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas. */

    /* const mensagem = (frase) => {
        frase = frase.toUpperCase()
        return frase
    }
    const mensagem2 = ("Quero me formar!") 
    console.log(mensagem2.length, mensagem2)  */

/////////////////////////



/* */