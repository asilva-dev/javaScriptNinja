var arr = [1, 2, 3,'Amanda', {bola : 'azul' } ];
undefined
arr
[ 1, 2, 3, 'Amanda', { bola: 'azul' } ]

arr.length;
5

arr[0]; //1
arr[1]; //2
arr[2]; //3
arr[3]; //'Amanda'
arr[4]; //{ bola: 'azul' }

//podemos subscrever o array para acrescentar um item, porém não é inteligente]
var arr = [1, 2, 3, 'Amanda', { bola: 'azul' }, ['la', 'la2', 'la3'] ];
undefined
arr.length; //6

// o push 'empurra' um item no array
arr.push({carro: 'BMW'} ); //7
arr
[
  1,
  2,
  3,
  'Amanda',
  { bola: 'azul' },
  [ 'la', 'la2', 'la3' ],
  { carro: 'BMW' }
]

//Acrescentando mais itens:
arr.push(function soma(x, y) {return x + y;});
8
arr
[
  1,
  2,
  3,
  'Amanda',
  { bola: 'azul' },
  [ 'la', 'la2', 'la3' ],
  { carro: 'BMW' },
  [Function: soma]
]\

//Loop, repetição for(inicio, condição, expressão final)
for( var num = 0; num < 20; num++ ){
    console.log(num);
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
10
11
12
13
14
15
16
17
18
19
undefined

for( var num = 2, arroz = 3; num < 5; num++ ){
    console.log(num);
    console.log(arroz++);
}
2   
3
3
4
4
5