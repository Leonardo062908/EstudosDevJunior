//Aprendendo sobre estrutura de controle for...in
//Usada mais para objetos, mas também pode ser usada em arrays
//Não precisamos controlar o in, porque ele já faz isso automaticamente
//Ele é uma maneira para percorrer os índices ou propriedades de um objeto
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i in notas) {
  //i representa os índices do array notas, então a cada iteração do loop atribui o próximo índice à variável i
  console.log(`Nota = ${notas[i]}`); // o I ainda não é o indice, para acessar o valor do array, precisamos usar notas[i]
}

const pessoa = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 29,
  peso: 64,
};

// Antes do in pode ser colocado qualquer nome de variável para representar as propriedades do objeto
for (let atributo in pessoa) {
  //atributo representa as propriedades do objeto pessoa
  console.log(`${atributo} = ${pessoa[atributo]}`); //Para acessar o valor da propriedade, usamos pessoa[atributo]
}

//Se eu usar o let para declarar a variável dentro do for, ela só existirá dentro do bloco do for.
