/*Aprendendo sobre operadores lógicos em JavaScript
 *operadores lógicos são usados para combinar expressões booleanas e retornar valores booleanos (true ou false)
 * Verdadeiro e verdadeiro -> verdadeiro
 * Verdadeiro e falso -> falso
 * Falso e verdadeiro -> falso
 * Falso e falso -> falso
 *Operando AND (&&)
 *Operando OR (||)
 *Com and operador retorna true somente se ambos os operandos forem true
 *Enquanto com or operador retorna true se pelo menos um dos operandos for true
 */

//Exemplos práticos de operadores lógicos
function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; //Usando operador lógico OR
  const comprarTv50 = trabalho1 && trabalho2; //Usando operador lógico AND
  // const comprarTv32 = !!(trabalho1 ^ trabalho2); //Usando operador lógico XOR (ou exclusivo), bitwise xor
  const comprarTv2 = trabalho1 != trabalho2; //Usando operador lógico de desigualdade
  const manterSaudavel = !comprarSorvete; //Usando operador lógico NOT

  return { comprarSorvete, comprarTv50, comprarTv2, manterSaudavel }; //Coleção chave/valor dinamicamente criada (ES2015)
}

console.log(compras(true, true)); //Ambos os trabalhos foram realizados
console.log(compras(true, false)); //Apenas o trabalho1 foi realizado
console.log(compras(false, true)); //Apenas o trabalho2 foi realizado
console.log(compras(false, false)); //Nenhum dos trabalhos foi realizado
