var pessoa = {nome: 'Amanda', idade: 31, peso: 85, altura: 1.60}
pessoa //{ nome: 'Amanda', idade: 31, peso: 85, altura: 1.6 }

//Adicionando mais um atributo
pessoa.sexo = 'feminino'
'feminino'

//pessoa retorna:
pessoa
{ nome: 'Amanda', idade: 31, peso: 85, altura: 1.6, sexo: 'feminino' }

pessoa.cor = 'preta'
'preta'

pessoa
{
  nome: 'Amanda',
  idade: 31,
  peso: 85,
  altura: 1.6,
  sexo: 'feminino',
  cor: 'preta'
}

pessoa.cor
'preta'

pessoa
{
  nome: 'Amanda',
  idade: 31,
  peso: 85,
  altura: 1.6,
  sexo: 'feminino',
  cor: 'preta'
}

//Adicionando um método na pessoa

pessoa.andar = function(){
    return 'Pessoa andando!';
}

//chamando o método
pessoa.andar();  //'Pessoa andando'

//Metodo de aniversario
pessoa.aniversario = function(){
    pessoa.idade++;
}

pessoa.aniversario(); //undefined
//ao chamar o método aniversario, a idade da pessoa aumentou
pessoa
{
  nome: 'Amanda',
  idade: 32,
  peso: 85,
  altura: 1.6,
  sexo: 'feminino',
  cor: 'preta',
  andar: [Function],
  aniversario: [Function]
}

pessoa.sobrenome = 'Silva';
'Silva'

pessoa
{
  nome: 'Amanda',
  idade: 32,
  peso: 85,
  altura: 1.6,
  sexo: 'feminino',
  cor: 'preta',
  andar: [Function],
  aniversario: [Function],
  sobrenome: 'Silva'
}


pessoa.nomeCompleto = function(){
  return pessoa.nome + ' '+ pessoa.sobrenome;
}
  [Function]

pessoa
{
  nome: 'Amanda',
  idade: 32,
  peso: 85,
  altura: 1.6,
  sexo: 'feminino',
  cor: 'preta',
  andar: [Function],
  aniversario: [Function],
  sobrenome: 'Silva',
  nomeCompleto: [Function]
}

pessoa.nomeCompleto()
  'Amanda Silva'

  
  
  
  