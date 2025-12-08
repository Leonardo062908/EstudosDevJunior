/*Aprendendo sobre switch em JavaScript*/
/*Semelhante ao if, o switch também é uma estrutura de controle condicional
/*Mais focado em igualdade estrita (===)
/*Útil quando temos múltiplas condições baseadas em um mesmo valor 
*/

const imprimirDiaSemana = function (nota) {
  switch (
    Math.floor(nota) //math.floor arredonda para baixo
  ) {
    case 10:
    case 9:
      console.log("Quadro de Honra"); // Sem o breack, o switch continua executando os próximos cases
      break; // Responsável por sair do switch
    case 8:
    case 7:
      console.log("Aprovado");
      break;
    case 6: // Switch não tem como colocar intervalos, um ponto negativo, visto que precisamos colocar case para cada valor
    case 5:
    case 4:
      console.log("Recuperação");
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log("Reprovado");
      break;
    default:
      console.log("Nota Inválida"); // Caso nenhum dos cases seja atendido, executa o default
  }
};

imprimirDiaSemana(10); // Quadro de Honra
imprimirDiaSemana(8.5); // Aprovado
imprimirDiaSemana(6); // Recuperação
imprimirDiaSemana(2); // Reprovado
imprimirDiaSemana(-1); // Nota Inválida
