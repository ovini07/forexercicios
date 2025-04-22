const nomes = ['Ana', 'Joao', 'Carlos'];

nomes.forEach(nome => {
  const saudacao = document.createElement('p');
  saudacao.textContent = `Olá, ${nome}! Seja bem-vinda(o)!`;
  document.body.appendChild(saudacao);
});