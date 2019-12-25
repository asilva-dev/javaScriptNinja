/*
tipos primitivos:
Number, string, boolean, null e undefined
todos os tipos que não sejam esses acima, são objetos(Objeto é um conjunto de propriedades)
*/

{propriedade: 'valor'}
{ propriedade: 'valor' }
var objeto = {propriedade: 'valor', propriedade2: 10, propriedade3: true};
//undefined
objeto
{ propriedade: 'valor', propriedade2: 10, propriedade3: true }

objeto.propriedade2 //10

var pessoa = {nome: 'Amanda', idade: 31, peso: 85, altura: 1.60}
undefined

pessoa.nome //'Amanda'
pessoa.idade //31
pessoa.altura //1.6
pessoa.peso //85

var carro = {cor: 'vermelho', motor: 2.0, portas: 4} //undefined

carro.cor //'vermelho'
carro.motor //2
carro.portas //4

pessoa //{ nome: 'Amanda', idade: 31, peso: 85, altura: 1.6 }

var myvar = function(){ return 'variavel myvar';} //undefined

myvar //[Function: myvar]

myvar() //'variavel myvar'
