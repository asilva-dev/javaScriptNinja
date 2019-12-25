var x = 3
var y = 7

if(x === 3){
    y = 3
}

y
//3
x
//3

if(x === y && x === 3){
    x = 5;
     y = 2;
}
x
//5
y
//2

if(x === 5 || y === 1){
    x = 1;
    y = 1;
}
x
//1
y
//1

if(x === 2){
    x = 5;
    y = 5;
}
x
//1
y
//1

/**
 *Else
 */

 var x = 1;
 var y = 10;
 if(x === 2){
    x = 5;
    y = 5;
    }
 x
//1
y
//1