//Exemplos de funções importantes em JavaScript
//Um exemplo é o freeze, que é usado para congelar um objeto, impedindo que suas propriedades sejam modificadas. Isso é útil para criar objetos imutáveis.
const pessoa = {
  nome: "João",
  idade: 30,
};

Object.freeze(pessoa); //Congela o objeto pessoa, impedindo que suas propriedades sejam modificadas.
pessoa.nome = "Maria"; //Essa linha não terá efeito, pois o objeto pessoa está congelado.
console.log(pessoa.nome); //João

//Outro exemplo é o keys, que é usado para obter um array com as chaves de um objeto. Isso é útil para iterar sobre as propriedades de um objeto ou para verificar se uma determinada chave existe.
const pessoa2 = {
  nome: "Ana",
  idade: 25,
  peso: 60,
};

console.log(Object.keys(pessoa2)); //Retorna um array com as chaves do objeto pessoa2: ["nome", "idade", "peso"]
console.log(Object.values(pessoa2)); //Retorna um array com os valores das propriedades do objeto pessoa2: ["Ana", 25, 60]
console.log(Object.entries(pessoa2)); //Retorna um array de arrays, onde cada sub-array contém uma chave e seu valor correspondente: [["nome", "Ana"], ["idade", 25], ["peso", 60]]

Objetct.entries(pessoa2).forEach((e) => {
  console.log(`${e[0]}: ${e[1]}`); //Itera sobre o array de entradas do objeto pessoa2 e imprime cada chave e seu valor correspondente.
});

Object.defineProperty(pessoa2, "dataNascimento", {
  enumerable: true, //Define a propriedade "dataNascimento" como enumerável, ou seja, ela aparecerá nas iterações sobre as propriedades do objeto.
  writable: false, //Define a propriedade "dataNascimento" como não gravável, ou seja, seu valor não pode ser modificado após ser definido.
  value: "01/01/1990", //Define o valor da propriedade "dataNascimento" como "01/01/1990".
});

pessoa2.dataNascimento = "02/02/1992"; //Essa linha não terá efeito, pois a propriedade "dataNascimento" é definida como não gravável.
console.log(pessoa2.dataNascimento); //01/01/1990
console.log(Object.keys(pessoa2)); //["nome", "idade", "peso", "dataNascimento"] - A propriedade "dataNascimento" aparece nas chaves do objeto, pois foi definida como enumerável.

//Object.assign é usado para copiar as propriedades de um ou mais objetos para um objeto de destino. Isso é útil para criar cópias de objetos ou para combinar objetos.
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };

const obj = Object.assign(dest, o1, o2); //O método Object.assign copia as propriedades dos objetos o1 e o2 para o objeto dest. Se houver propriedades com o mesmo nome, a última propriedade copiada (neste caso, a do objeto o2) sobrescreverá a anterior.
