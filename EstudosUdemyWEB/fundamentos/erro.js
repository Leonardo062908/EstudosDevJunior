//Aprendendo sobre tratamento de erros em JavaScript
function tratarErroELancar(erro) {
  throw new Error("Ocorreu um erro ao processar o objeto!"); // Lança um novo erro com uma mensagem personalizada
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUppeCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    //Bloco try pode gerar um erro
    console.log("Finalizando a execução da função imprimirNomeGritado.");
  }
}

const obj = { name: "Roberto" }; // Objeto com propriedade incorreta 'nome' em vez de 'name'
imprimirNomeGritado(obj); // Isso causará um erro porque 'name' é undefined
