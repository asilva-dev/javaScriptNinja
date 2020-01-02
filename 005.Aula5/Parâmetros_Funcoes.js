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

function myFunction2(arg) {
    return arg.curso;
}

myFunction2();
/*Thrown:
TypeError: Cannot read property 'curso' of undefined
    at myFunction2 (repl:2:12) */

myFunction2(obj)
'JavaScript Ninja'
obj.curso
'JavaScript Ninja'
                    