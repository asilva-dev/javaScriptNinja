/// dentro de função: escopo local | fora de função: escopo global
var myvar = 1;
undefined
myvar
1

function myFunction(){
    return myvar;
}

myFunction()
1

function otherFunction() {
    var otherVar = true;
    return otherVar;
}
undefined

otherFunction();
true

otherVar;
/*Thrown:
ReferenceError: otherVar is not defined 
//sempre usar var para declarar uma variável
*/

//Declarando uma variavel sem o var, a mesma passa a ser do escopo global(o que não é boa prática)

function newFunction(){
    newVar = 'variavelGlobal';
    return newVar;
}

newVar;
//Thrown: refenceError: newVar is not defined

//Chamando a funcao
newFunction(); 'variavelGlobal'

//chamando a variavel criada sem o var de dentro da funcao
newVar; //'variavelGlobal'

//Pode gerar conflito de nomes, o garbage collector não funciona

function outraFuncao(a, b, c){
    return a;
}
undefined

outraFuncao(1);
1
outraFuncao(1, 2);
1

a
// Thrown:
// ReferenceError: a is not defined

//Os parâmetros das funções são globais também, só podem ser acessados através da funcão.