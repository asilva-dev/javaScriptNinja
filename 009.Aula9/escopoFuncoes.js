function myFunction(){
	function sum(){
		return 1 + 2;
	}
	return sum();
}

console.log(myFunction());


//Assim como variáveis, funções dentro de outra função só pode ser acessada 
//dentro da função
 console.log(sum());  //apresentou erro no console


  function myFunction(){
    var number1 = 1;
    var number2 = 2;
    function sum(){
          return number1  + number2 ;
  }
    return sum();
}


//declarando a função sum() depois do return, a execução ocorre do mesmo jeito
function myFunction(){
    var number1 = 1;
    var number2 = 2;
    return sum();
    function sum(){
          return number1  + number2 ;
  }
}