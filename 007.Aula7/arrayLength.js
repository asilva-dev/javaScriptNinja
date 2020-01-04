var arr = ['Amanda', null, true, { bola: 'azul' }, function() {} ];
undefined
arr.length; //length conta quantos itens temos dentro do array
5

var num = 0;
undefined
while(num < 10){
    console.log(num++);
}
0
1
2
3
4
5
6
7
8
9
//podemos acessar as propriedades do array manualmente:
arr[0]; //'Amanda'
arr[1]; //null
arr[2]; //true
arr[3]; //{ bola: 'azul' }
arr[4]; //[Function]

//verificando a quantidade de itens do array com o while
qtd = arr.length;
5
while(qtd > 0) {
    console.log ( arr[ --qtd ] );
}

/*
[Function]
{ bola: 'azul' }
true
null
Amanda 
*/


//acessando o objeto do array
var qtd = arr.length;
undefined
> qtd
5
while(qtd > 0) {
console.log( arr[ --qtd] );
    if ( qtd === 3) {
        console.log(arr[ qtd ].bola );
    }
}
[Function]
{ bola: 'azul' }
azul
true
null
Amanda