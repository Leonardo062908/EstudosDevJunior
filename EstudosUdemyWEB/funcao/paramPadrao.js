//Aprendendo a como gerar parametros padroes em funcoes
//São importantes para evitar erros quando o usuario nao passa os parametros esperados
//Se não houver parametro padrao, o valor sera 'undefined'. O que pode gerar erros em operacoes matematicas
function soma1(a, b, c) {
  a = a || 1; //Se 'a' for undefined, null, 0, false, etc., atribui 1
  b = b || 1; //Se 'b' for undefined, null, 0, false, etc., atribui 1
  c = c || 1; //Se 'c' for undefined, null, 0, false, etc., atribui 1
  return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1, 2, 3)), soma1(0, 0, 0); // Espera os retornos 3, 5, 6

//Estrategia 2, 3 e 4 para gerar parametros padroes
function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3)), soma2(0, 0, 0); // Espera os retornos 3, 5, 6

//Usando o valor padrão do ES2015
//Agora podemos definir valores padroes diretamente na declaracao dos parametros, de maneira simples e clara
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3)), soma3(0, 0, 0); // Espera os retornos 3, 5, 6
