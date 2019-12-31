var arr = [1, 2, 3];

function myFunction(arg){
    return arg;
}

myFunction('amanda');
'amanda'

myFunction(arr);
[ 1, 2, 3 ]

var obj = {
    propriedade: 'amanda',
    curso: 'JavaScript Ninja',
    ninja: true
}

function myFunction(arg){
    return arg;
}

myFunction(obj).ninja; //true
myFunction(obj).propriedade; //'amanda'