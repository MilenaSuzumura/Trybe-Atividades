//1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const arrayUnico = arrays.reduce((acc, array) => {
    array.forEach((arrays) => acc.push(arrays));
    return acc;
  }, []);
  return arrayUnico;
}

console.log(flatten());