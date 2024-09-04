function pesquisar() {
    // Obtém o elemento de input onde o usuário digita o nome do atleta
    let inputPesquisar = document.getElementById('input-pesquisar');
  
    // Obtém o elemento onde o resultado da pesquisa será exibido
    let resultadoPesquisa = document.getElementById('resultado-pesquisa'); 
  
    // Busca o índice do objeto atleta no array de dados que corresponda ao valor digitado
    const indiceDoObjetoAtleta = dados.findIndex(nome => nome.titulo === inputPesquisar.value);
  
    // Verifica se o atleta foi encontrado (índice diferente de -1)
    if (indiceDoObjetoAtleta !== -1) {
      // Remove o atributo 'hidden' para exibir o resultado
      resultadoPesquisa.removeAttribute('hidden');
  
      // Preenche o elemento com as informações do atleta encontrado
      resultadoPesquisa.innerHTML = `
        <h2><a href="#" target="_blank" id="titulo-atleta">${dados[indiceDoObjetoAtleta].titulo}</a></h2>
        <p class="descricao-meta" id="descricao-atleta">${dados[indiceDoObjetoAtleta].descricao}</p>
        <a href="${dados[indiceDoObjetoAtleta].link}" target="_blank" id="sobre-atleta">Mais informações</a>
      `;
    } else {
      // Se o atleta não foi encontrado, exibe uma mensagem
      resultadoPesquisa.removeAttribute('hidden');
      resultadoPesquisa.textContent = `Atleta não encontrado.`
    }
  }