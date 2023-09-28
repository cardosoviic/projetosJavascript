/* Funções em Javascript */

/*alert()
console.log()
prompt()
*/

/*
Existem 2 tipos de funções:
- Reservadas pela linguagem, é necessário apenas chamar a função para que
seja executada
alert()
prompt()
console.log()

-Personalizadas 
Criadas pelo usuário, é necessário que sejam construídas 
utilizando a estrutura:
function nomeDaFuncao() {

}
e em seguidas chamadas para serem executadas 

Em cada função há a presença dos parênteses () que podem estar vazio ou não.
Os parêtenses recebem um argumento. Quando este argumento é uma variável, dizemos que ele 
recebe um parâmetro 
*/

function saudacao() {
    console.log("Olá mundo!");
}

saudacao();

//Função personalizada com PARÂRAMETRO, pois se trata de uma variável
//previamente declarada e que será utilizada no bloco de código
var nome;
function despedida(nome) {
    console.log("Tchau, " + nome);
}

despedida("João");

var a, b ;
function soma(a, b) {
    return a + b;
}

var resultado = soma(5, 3);
console.log(resultado);
