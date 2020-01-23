//Valores primitivos não são objetos  ||Construtores : criam novos objetos
var name = new String('Mandy'); 
name;
//retorna [String: 'Mandy']

var age = new Number(30);
age;
//retorna -> [Number: 30]
age.valueOf()
//retorna -> 30

var ninja = new Boolean(false);
ninja;
//retorna -> [Boolean: false]
ninja.valueOf()
//retorna -> false



var myVar = Number('152');

myVar
152

myVar + 2;
154

var myVar = Boolean({})

myVar
true

!!{}
true
