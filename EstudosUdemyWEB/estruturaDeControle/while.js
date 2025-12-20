/*Como funciona o while em JavaScript
 *Ele é focado em repetir um bloco de código enquanto uma condição for verdadeira
 *Usado também quando temos um número indeterminado de repetições
 */
function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor); //Lembrando que o Math.floor arredonda para baixo
}

let opcao = 0;
while (opcao != -1) {
  //Enquanto a opção for diferente de -1, o loop continua, e lembre-se de tomar cuidado para não criar loops infinitos
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
}5

console.log("Até a próxima!");
