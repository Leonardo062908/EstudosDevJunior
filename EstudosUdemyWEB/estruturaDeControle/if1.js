//Aprendendo sobre estrutura de controle 'if' em JavaScript
function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log("Aprovado com " + nota);
  }
}

soBoaNoticia(8.1); //Exibe 'Aprovado com 8.1'
soBoaNoticia(6.1); //Não exibe nada, pois a nota é menor que 7

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("É verdade... " + valor);
  }
}

seForVerdadeEuFalo(); //Não exibe nada, pois o valor é undefined (falsy)
seForVerdadeEuFalo(null); //Não exibe nada, pois o valor é null (falsy)
seForVerdadeEuFalo(undefined); //Não exibe nada, pois o valor é undefined (falsy)
seForVerdadeEuFalo(NaN); //Não exibe nada, pois o valor é NaN (falsy)
seForVerdadeEuFalo(""); //Não exibe nada, pois o valor é uma string vazia (falsy)
seForVerdadeEuFalo(0); //Não exibe nada, pois o valor é 0 (falsy)
seForVerdadeEuFalo(-1); //Exibe 'É verdade... -1', pois o valor é -1 (truthy)
seForVerdadeEuFalo(" "); //Exibe 'É verdade...  ', pois o valor é uma string com espaço (truthy)
seForVerdadeEuFalo("?"); //Exibe 'É verdade... ?', pois o valor é uma string com caractere (truthy)
seForVerdadeEuFalo([]); //Exibe 'É verdade... ', pois o valor é um array vazio (truthy)
seForVerdadeEuFalo([1, 2]); //Exibe 'É verdade... 1,2', pois o valor é um array com elementos (truthy)
seForVerdadeEuFalo({}); //Exibe 'É verdade... [object Object]', pois o valor é um objeto vazio (truthy)
