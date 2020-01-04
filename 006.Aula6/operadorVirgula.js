// , junta varias coisas em uma unica expressão
var a, b = 2, c;
//pode ser no return de uma função também
function myFunction(){
    var x = 0;
    return (x += 1, x);
}

function myFunction(){
    var a  = 1, b = 2, c = 3;
    return [ a, b, c];
}
undefined
myFunction();
[ 1, 2, 3 ]
// as variaveis declaradas dentro da função são locais, não podem ser acessadas fora da função


//swich
function myFunc2(x){
    switch(x) {
        case 1:
            console.log('x é 1');
            break;
        case 2:
            console.log('x é 2');
            break;
        default:
            console.log('x não é nem 1 nem 2');
     }
}