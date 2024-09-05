// Array para armazenar os atletas já pesquisados
let atletasPesquisados = [];

// Obtém o elemento onde o resultado da pesquisa será exibido
const resultadoPesquisa = document.getElementById("resultado-pesquisa");

  // Obtém o elemento <h1> título
  const titulo = document.getElementById('tituloPrincipal');

// Função para pesquisar atletas
function pesquisar() {
  // Obtém o elemento de input onde o usuário digita o nome do atleta
  const inputPesquisar = document.getElementById("input-pesquisar");

  // Busca o índice do objeto atleta no array de dados que corresponda ao valor digitado
  const indiceDoObjetoAtleta = dados.findIndex(
    (nome) => nome.titulo.toLowerCase() === inputPesquisar.value.toLowerCase()
  );

  // Verifica se o atleta foi encontrado (índice diferente de -1)
  if (indiceDoObjetoAtleta !== -1) {
    // Remove o atributo 'hidden' para exibir o resultado
    resultadoPesquisa.removeAttribute("hidden");

    // Preenche o elemento com as informações do atleta encontrado
    resultadoPesquisa.innerHTML = `
      <h2><a href="#" target="_blank" id="titulo-atleta">${dados[indiceDoObjetoAtleta].titulo}</a></h2>
      <p class="descricao-meta" id="descricao-atleta">${dados[indiceDoObjetoAtleta].descricao}</p>
      <a href="${dados[indiceDoObjetoAtleta].link}" target="_blank" id="sobre-atleta">Mais informações</a>
    `;

    // Verifica se o atleta já foi pesquisado
    if (!atletasPesquisados.some(atleta => atleta.titulo === dados[indiceDoObjetoAtleta].titulo)) {
      atletasPesquisados.push(dados[indiceDoObjetoAtleta]);
      mostrarJaExibidos();
    }

    // Atualiza o título da pesquisa
    titulo.textContent = `Atletas do Brasil`;
  } else {
    // Se o atleta não foi encontrado, exibe uma mensagem
    titulo.textContent = `Atleta não encontrado(a)!`;
  }

  // Limpa o valor do input
  inputPesquisar.value = "";
}

// Função para mostrar os atletas já exibidos
function mostrarJaExibidos() {
  // Limpa a área de resultados antes de exibir os novos dados
  resultadoPesquisa.innerHTML = "";

  // Itera sobre o array de atletas pesquisados e cria os elementos HTML
  atletasPesquisados.forEach((atleta) => {
    const divInformacoes = document.createElement("div");
    divInformacoes.classList.add("item-resultado");

    divInformacoes.innerHTML = `
      <h2><a href="${atleta.link}" target="_blank">${atleta.titulo}</a></h2>
      <p class="descricao-meta">${atleta.descricao}</p>
    `;

    resultadoPesquisa.appendChild(divInformacoes);
  });
}

// Função para limpar o histórico de pesquisa
function limparHistorico() {
  // Limpa o conteúdo do elemento resultadoPesquisa
  resultadoPesquisa.innerHTML = "";

  // Limpa o array de atletas pesquisados
  atletasPesquisados = [];

  // Oculta o elemento de resultados
  resultadoPesquisa.setAttribute("hidden", "true");

  // Atualiza o título da pesquisa
  titulo.textContent = `Atletas do Brasil`;
}
