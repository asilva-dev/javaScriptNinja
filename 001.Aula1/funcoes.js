var x = 1;

function soma(){
    x = x + 1;
}

x;
//1

soma();
// ao chamar soma, ela acrescenta mais 1 ao x

x;
//x passa a ser 2

function qualquer(){
    var amanda = amanda;
    return amanda;
}

qualquer();
//retorna 'amanda'


//usando a funçao p somar
var y = 4;

function cinco(){
    return 5;
}

cinco()
//traz 5

y + cinco()
//exibe 9 na tela

//funcoes recebem argumentos ou parametros

function soma(x , y){
    return x + y;
}

soma(5, 7)
//exibe 12