

//o typeof só é confiável em valores primitivos

typeof undefined;
//retorna -> 'undefined'

typeof function() {};
//retorna ->  'function'

typeof true;
//retorna ->  'boolean'

typeof 10;
//retorna ->  'number'

typeof 'JS Ninja';
//retorna ->  'string'

 typeof {};
//retorna -> 'object'

typeof [];
//retorna -> 'object'

typeof null;  //O Null traz um erro de implementação do js
//retorna -> 'object'

 typeof 10;
//retorna -> 'number'
> typeof NaN;
//retorna -> 'number'



function sum(num1, num2){
	return num1 + num2;
}
console.log(sum(10, 2));
//retorna -> 12

console.log(sum('JS', 2)); //ao passar uma string, o valor será concatenado
//retorna -> JS2

console.log(sum({}, []));
//retorna -> [object Object]


function subtract(num1, num2){
	return num1 - num2;
}

console.log(subtract(10, 2));
//retorna -> 8

console.log(subtract('JS', 2));//a subtração não retorna porque não é um número
//retorna -> NaN

console.log(subtract({}, []));//a subtração não retorna porque não é um número
//retorna -> NaN

//Usando o typeof para testar se é numero e realizar a subtração
function subtract(num1, num2){
	if(typeof num1 == 'number' && typeof num2 === 'number'){
		return num1 - num2;
	} else {
		return 'Operação inválida, insira dois números como parâmetro!';
	}
}

//Usando o typeof para testar se algum parametro passado é
function subtract2(num1, num2) {
	if(num1 === null) {
		return 'Não entre com valores nulos!';
	}
	return num1 - num2;
}

console.log(subtract2(null, 2 ));
//retorna -> Não entre com valores nulos!