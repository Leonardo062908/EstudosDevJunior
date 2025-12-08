//Aprendendo sobre if, else if e else em JavaScript
Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim; //Aqui retornamos um valor booleano, ainda sem o if
};

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log("Quadro de Honra");
  } else if (nota.entre(7, 8.99)) {
    //Else if usado para testar outra condição
    console.log("Aprovado");
  } else if (nota.entre(4, 6.99)) {
    console.log("Recuperação");
  } else if (nota.entre(0, 3.99)) {
    console.log("Reprovado");
  } else {
    console.log("Nota Inválida");
  }
};

imprimirResultado(10); // Quadro de Honra
imprimirResultado(8.5); // Aprovado
imprimirResultado(6); // Recuperação
imprimirResultado(2); // Reprovado
imprimirResultado(-1); // Nota Inválida
