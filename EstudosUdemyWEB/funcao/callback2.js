const notas = [7.7, 8.5, 6.3, 9.0, 5.5, 10.0];

// Sem callback
const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}

console.log(notasBaixas1);

//Com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log;

//Callback com arrow function
const notasBaixas3 = notas.filter((nota) => nota < 7);
console.log(notasBaixas3);

//Filter funciona criando um novo array, sem modificar o array original
