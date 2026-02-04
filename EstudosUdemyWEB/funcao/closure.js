//Como funciona closure em JS, basicamente closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função
//Contexto léxico

const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao()); // Retorna "Local", pois a função dentro foi declarada dentro do escopo de fora, então ela tem acesso às variáveis de fora, mesmo quando chamada fora do seu contexto original
