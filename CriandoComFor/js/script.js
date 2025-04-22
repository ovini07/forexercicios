function usandoFor(){
    const imputNum = document.getElementById('numerovezes')
    const num = parseInt (imputNum.value);

    for (let i = 0; i< num; i++){
        const h1 = document.createElement('h1');
        h1.textContent = 'Este texto foi gerado por um for';
        document.body.appendChild(h1);
    }
    imputNum.value = "";
}
