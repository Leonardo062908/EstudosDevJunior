//Aprendendo sobre o break e continue
//Break serve para interromper um loop
//Continue serve para pular uma iteração do loop

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x of nums) {
  if (x == 5) {
    break; //Interrompe o loop quando x for igual a 5
  }
  console.log(`${x}: ${nums[x]}`); //Vai imprimir do 1 ao 4, quando chegar no 5, o loop será interrompido
}

for (let y of nums) {
  if (y == 5) {
    continue; //Pula a iteração quando y for igual a 5
  }
  console.log(`${y}: ${nums[y]}`); //Vai imprimir do 1 ao 4 e depois do 6 ao 10, pulando o 5
}

//NUNCA usar essa estrutura abaixo, pois torna o código confuso
//Rótulos (labels) podem ser usados com break e continue para identificar qual loop deve ser interrompido ou continuado
externo: for (let a of nums) {
  for (b in nums) {
    if (a == 2 && b == 3) break externo; //Usando rótulo para quebrar o loop externo
    console.log(`Par = ${a}, ${b}`);
  }
}

console.log("Fim!");
