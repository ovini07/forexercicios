const numeros = [1, 4, 7, 10, 13, 16];
let quantidadePares = 0;

numeros.forEach((numero) => {
  if (numero % 2 === 0) {
    quantidadePares++;
  }

});
alert(`Quantidade de números pares: ${quantidadePares}`);
