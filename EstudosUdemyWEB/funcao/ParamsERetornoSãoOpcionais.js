//Exemplo de função com parâmetros e retorno opcionais
function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Área é maior que 20: ${area}m²`);
  } else {
    return area;
  }
}

console.log(area(2, 2)); // Chama a função com parâmetros 2 e 2, espera retorno 4
console.log(area(2)); // retona NaN, pois altura é undefined
console.log(area()); // retona NaN, pois largura e altura são undefined
console.log(area(5, 2, 3, 5, 7)); // Chama a função com mais parâmetros que o necessário, ignora os extras, espera retorno 10
console.log(area(5, 5)); // Chama a função com parâmetros 5 e 5, espera mensagem "Área é maior que 20: 25m²"
