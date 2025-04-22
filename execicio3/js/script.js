const numeros = [1, 2, 4, 7, 13, 16];

let quantidadePares = 0;
let numerosPares = [];

numeros.forEach(numero => {
  if (numero % 2 === 0) {
    quantidadePares++;
    numerosPares.push(numero);
  }
});

const resultado = document.createElement('p');
resultado.textContent = `Quantidade de números pares: ${quantidadePares}`;
document.body.appendChild(resultado);

const listaPares = document.createElement('p');
listaPares.textContent = `Números pares encontrados: ${numerosPares.join(', ')}`;
document.body.appendChild(listaPares);