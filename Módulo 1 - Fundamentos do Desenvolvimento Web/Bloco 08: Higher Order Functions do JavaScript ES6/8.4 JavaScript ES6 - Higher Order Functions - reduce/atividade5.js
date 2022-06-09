/*5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra
a maiúscula ou minúscula.*/

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const aMaior = names.reduce((resultado, nome) => {
    let contagem = 0;
    for (let i = 0; i < nome.length; i += 1) {
      if (nome[i] === 'A') {
        contagem += 1;
      }
    }
    return resultado += contagem;
  }, 0);

  const aMenor = names.reduce((resultado, nome) => {
    let contagem = 0;
    for (let i = 0; i < nome.length; i += 1) {
      if (nome[i] === 'a') {
        contagem += 1;
      }
    }
    return resultado += contagem;
  }, 0);
  return `A quantidade de A é ${aMaior} e a quantidade de a menor é ${aMenor}. E o total dos A é igual a ${aMaior + aMenor}.`;
}

console.log(containsA());