// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
  // Dica: use parâmetro rest.

// escreva sum abaixo
const sum = (...valores) => {
  return valores.reduce((valorInicial, valorSegundo) => valorInicial + valorSegundo);
}

console.log(sum(1, 1, 1, 1));