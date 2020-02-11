//While
var counter = 1;
while( counter < 10 ) {
    console.log( counter++ );
}
console.log( 'counter não é mais menor que 10!' );
// Console exibe:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
//counter não é mais menor que 10!


//do while (Sempre vai entrar na primeira instrução)
var counterTwo = 1;
do {
    console.log( counterTwo++ );
} while( counterTwo < 10 );
// Console exibe:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

//for in (percorre propriedades de um objeto)
var car = {
    brands: 'VW',
    model: 'gol',
    year: 2013
}
//retorno no console
car
{ brands: 'VW', model: 'gol', year: 2013 }

for( var prop in car ) {
    console.log( prop );
}
//retorno no console
brands
model
year

//verificando se existe a propriedade
console.log('Brands in car?', 'brands' in car );
//retorno no console
//Brands in car? true
console.log('doors in car?', 'doors' in car );
//doors in car? false