//Entedendo o contexto léxico em JavaScript
//O contexto léxico é o local onde a função foi declarada fisicamente no código fonte
const valor = "Global";

function minhaFuncao() {
  console.log(valor); //não existe uma variável local, então ele procura no contexto léxico onde a função foi declarada
}

function exec() {
  const valor = "Local";
  minhaFuncao();
}

exec(); // Retorna "Global", pois a função foi declarada no contexto global, um detalhe é que o valor de exec não está nem sendo usado dentro de minhaFuncao
