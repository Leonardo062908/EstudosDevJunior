//Aprendendo com condicionais 'if' em JavaScript
function teste1(num) {
  if (num > 7) console.log(num);
  console.log("Final");
}

teste1(6); //Exibe 'Final', pois 6 não é maior que 7
teste1(8); //Exibe '8' e 'Final', pois 8 é maior que 7
//Em javaScript, a ausência de chaves em um bloco 'if' faz com que apenas a primeira linha subsequente seja considerada parte do bloco condicional.

function teste2(num) {
  if (num > 7);
  {
    //Cuidado com o ';' ao final do 'if', isso termina a instrução do 'if' prematuramente
    console.log(num);
  }
}

teste2(6); //Exibe '6', pois o ';' após o 'if' faz com que o bloco sempre seja executado
teste2(8); //Exibe '8', pois o ';' após o 'if' faz com que o bloco sempre seja executado
//O ponto e vírgula após a condição do 'if' cria um bloco vazio para o 'if', fazendo com que o bloco subsequente seja sempre executado, independentemente da condição.
