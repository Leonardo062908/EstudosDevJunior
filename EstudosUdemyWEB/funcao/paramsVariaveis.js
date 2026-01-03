function soma() {
  let soma = 0;
  for (i in arguments) {
    //arguments é um array interno que contém todos os parâmetros passados
    soma += arguments[i];
  }
  return soma;
}

console.log(soma()); // Chama a função sem parâmetros, espera retorno 0
console.log(soma(3)); // Chama a função com um parâmetro, espera retorno 3
console.log(soma(3, 5, 2)); // Chama a função com três parâmetros, espera retorno 10
console.log(soma(1.5, 2.5, 3.5, 4.5)); // Chama a função com quatro parâmetros decimais, espera retorno 12
console.log(soma("a", "b", "c")); // Chama a função com três parâmetros string, espera retorno 'abc', porque ele concatena as strings
console.log(soma(1, "b", 3)); // Chama a função com parâmetros mistos, espera retorno '1b3', porque ele concatena os valores como string
