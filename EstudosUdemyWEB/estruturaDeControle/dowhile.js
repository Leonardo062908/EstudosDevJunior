//Aprendendo a estrutura do while - Ela é pouco utilizada, mas é importante conhecer sua funcionalidade
function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor); //Lembrando que o Math.floor arredonda para baixo
}

let opcao = 0;

do {
  //O bloco de código dentro do do será executado ao menos uma vez, independente da condição
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != -1); //Depois de executar o bloco, a condição é verificada

console.log("Até a próxima!");
