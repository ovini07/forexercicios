const frutas = ['maçã', 'banana', 'laranja', 'uva'];
const lista = document.getElementById('Lista-Frutas');

frutas.forEach((fruta, indice) => {
    console.log(`${indice} : ${fruta}`);

    const item = document.createElement('li');
    item.textContent = `${indice + 1} - ${fruta}`;
    lista.appendChild(item);
});
