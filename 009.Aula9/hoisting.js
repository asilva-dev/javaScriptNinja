function myFunction(){
    var number1 = 1;
    var number2 = 2;
    return sum();
    function sum(){
          return number1  + number2 ;
  }
}

//o hoisting coloca para cima a função sum() para pode executá-la corretamente, antes do return
function myFunction(){
	var number1 = 1;
  var number2 = 2;
	function sum(){
          return number1  + number2 ;
  }    
    return sum();
}

//Se atribuir a função a uma variavel dentro da funcao principal o javaScript não entende
function myFunction(){
	var number1 = 1;
    var number2 = 2;
	var sum = function sum(){
          return number1  + number2 ;
  }    
    return sum();
}

//testando variavel antes de ser declarada
function myFunction() {
	console.log( 'ANTES DE CRIAR', number1 );
	var number1 = 10;
	console.log( 'DEPOIS DE DECLARAR', number1 );
}
console.log( myFunction() );
// ANTES DE CRIAR undefined
// DEPOIS DE DECLARAR 10

//Exibindo uma variável que não existe
function myFunction() {
	console.log( 'ANTES DE CRIAR', number1 );
	console.log( 'NUMBER2', number2 );	
	var number1 = 10;
	console.log( 'DEPOIS DE DECLARAR', number1 );
}
//erro ReferenceError: number2 is not defined
//Hosting com variáveis, só a partir do momento que ela é declarada
