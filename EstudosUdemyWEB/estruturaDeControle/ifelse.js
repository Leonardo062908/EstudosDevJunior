//Aprendendo sobre if e else em JavaScript
const imprimirResultado = function (nota) {
  // trata null/undefined diretamente
  if (nota === null || nota === undefined) {
    console.log("Nota inválida! Deve ser um valor numérico.");
    return;
  }

  // Se for string, tenta converter
  if (typeof nota === "string") {
    const s = nota.trim();
    if (s === "") {
      console.log("Nota inválida! Deve ser um valor numérico.");
      return;
    }
    const parsed = Number(s);
    if (!Number.isFinite(parsed)) {
      console.log("Nota inválida! Deve ser um valor numérico.");
      return;
    }
    nota = parsed;
  }

  // Se não for número finito, inválido
  if (typeof nota !== "number" || !Number.isFinite(nota)) {
    console.log("Nota inválida! Deve ser um valor numérico.");
    return;
  }

  // Resultado
  console.log(nota >= 7 ? "Aprovado" : "Reprovado");
};

imprimirResultado(8); // Aprovado
imprimirResultado(6); // Reprovado
imprimirResultado("7"); // Aprovado
imprimirResultado(""); // Nota inválida!
imprimirResultado("abc"); // Nota inválida!
imprimirResultado(NaN); // Nota inválida!
