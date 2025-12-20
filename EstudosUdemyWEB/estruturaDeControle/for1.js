//Aprendendo sobre estrutura for
let contador = 1;
while (contador <= 10) {
  console.log(`Contador = ${contador}`);
  contador++; //Acrescentando 1 ao contador
}

for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++) {
  //Lenghth retorna o tamanho do array, além disso, essa linha é responsável por iniciar o loop, definir a condição de parada e o incremento
  console.log(`Nota = ${notas[i]}`);
}
