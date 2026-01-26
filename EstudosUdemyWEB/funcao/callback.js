//Aprendendo sobre callbacks em JavaScript
//Servem para passar funções como argumentos para outras funções, permitindo maior flexibilidade e reutilização de código.

const fabricantes = ["Mitsubishi", "BMW", "Dodge"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); //Passando a função imprimir como callback para forEach
fabricantes.forEach((fabricante) => console.log(fabricante));
