//funcoes  são objetos de primeira classe (tem o mesmo tratamento de objetos com o javaScript)
//pode-se atribuir objetos a variaveis
var obj = {};

//pode-se atribuir funções variaveis
var func = function func() {};

//uma funcao retorna um objeto
function person(){
	return {
		name: 'Amanda',
		lastName:'Silva'
	}
};
console.log(person()); //retorna o objeto

function person2(){
	var info = {
		name: 'Amanda',
		lastName:'Silva'
	}
	return info;
}; //o resultado é o mesmo

console.log(person().name); //retorna o name
console.log(person().lastName); //retorna o lastName

//Funções -> Chamando uma dentro da outra
function adder(x) {
	return function(y) { 
		return x + y;
	}; //quando é uma função, tem que colocar o ;
}

var add2 = adder(2); //add2 recebe a função adder(3);
console.log(add2(3)); //console imprime a variavel add2 com (3), retorna 5 no console


//A programação funcional possibilita ja invocar as duas funções de uma vez,uma de dentro da outra
adder(2)(4);

//Passando objetos por parâmetros
var car = {
	color: 'yellow';
};

function getCarColor(mycar) {
	return mycar.color;
}

console.log( getCarColor(car) );
//retorna 'yellow'

//funcoes por parametro

function showOtherFunction(func) {
	return func();
}

showOtherFunction(function() {
	return 'Functional JS Ninja!';
});


//ou

function returnedFunction() {
	return 'Returned function';
}
console.log( showOtherFunction(returnedFunction ) );

//ou
console.log( showOtherFunction(function(){
	return 'Functional JS Ninja!';
}));
