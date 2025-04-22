function gerarQuadrados() {
    const input = document.getElementById('numero');
    const num = parseInt(input.value);
    const container = document.getElementById('container-quadrados');

    for (let i = 0; i < num; i++) {
      const div = document.createElement('div');
      div.classList.add('quadrado');
      container.appendChild(div);
    }
  
    input.value = "";
  }
  