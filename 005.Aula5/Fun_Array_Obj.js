//Funções e Objetos são a parte mais importante do javaScript
//Retorno de funções e Objetos
function myFunction() {
    return 1;
}
myFunction()  //1

function myFunction(){
return 'string';
}
myFunction()
'string';

function myFunction(){
return true;
}
myFunction()
true

function myFunction(){
return null;
}
myFunction()
null

function myFunction(){
}
 myFunction();
 

 //Não é permitido retornar mais de um tipo, caso tenha que retornar, pode-se fazer uma function com um array:

 function myFunction(){
    return [ 1, 2, 3]
}
myFunction(); //Retornará -> [ 1, 2, 3 ]

myFunction()[1]; //Retornará o indice 1 que é o -> 2

//Retornando um objeto

myFunction()
> function myFunction(){
    return {
        propriedade1 : 1,
        propriedade2: 'Amanda',
        propriedade3: function() {
            return 'propriedade3';
        }
    };
}

//ao chamar, o retorno será o objeto completo:
myFunction()
{
  propriedade1: 1,
  propriedade2: 'Amanda',
  propriedade3: [Function: propriedade3]
}

var values = myFunction();

values
{
  propriedade1: 1,
  propriedade2: 'Amanda',
  propriedade3: [Function: propriedade3];
}

//retornando uma propriedade do objeto:
values.propriedade3();
'propriedade3'

values.propriedade2;
'Amanda'