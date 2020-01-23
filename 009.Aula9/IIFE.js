//Função auto executável

function sum() {
	return 1 + 2;
}
console.log( sum() );

var sum2 = function(){
	return 3 + 2;
}
console.log( sum2() );

var sum3 = function otherSum(){
	return 5 + 8;
}
console.log( sum3() );

//apresenta erro porque a funcao só foi definida dentro da variável
console.log( otherSum() );

var obj = {
	prop: function() {
 	return 1 + 2;
	}
};

console.log(obj.prop);
// retorna -> [Function: prop]

console.log(obj.prop() );
//retorna -> 3  /*não tem como executar uma função anonima, sem nome */



//Funcção auto executável
(function() {
	console.log( 1 + 2 );
})();
3