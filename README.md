# Atletas do Brasil

Este projeto é uma aplicação web desenvolvida em HTML, CSS e JavaScript para exibir informações sobre atletas brasileiros das Olimpíadas. A aplicação permite aos usuários pesquisar atletas pelo nome e visualizar detalhes sobre eles, incluindo uma breve descrição e um link para mais informações.

O projeto foi iniciado como parte da imersão da Alura em parceria com o Google. Ele está sendo desenvolvido juntamente com a imersão para praticar e aplicar conhecimentos adquiridos ao longo do curso.


## Tecnologias Utilizadas

- **HTML**: Estrutura básica da página e elementos de entrada.
- **CSS**: Estilização da página para uma aparência limpa e moderna.
- **JavaScript**: Lógica de pesquisa e exibição dos resultados.

## Funcionalidades

- **Campo de Pesquisa**: Permite ao usuário digitar o nome de um atleta para realizar a busca.
- **Botão de Pesquisa**: Aciona a função de busca ao ser clicado.
- **Exibição de Resultados**: Mostra detalhes do atleta encontrado ou uma mensagem de erro caso o atleta não seja encontrado.

## Estrutura dos Arquivos

- `index.html`: Contém a estrutura HTML da página.
- `style.css`: Define o estilo visual da página.
- `dados.js`: Armazena as informações dos atletas.
- `app.js`: Implementa a lógica de busca e exibição dos resultados.

## Detalhes do Código

### HTML (`index.html`)

Define a estrutura da página com um campo de pesquisa, um botão e uma seção para exibir os resultados da pesquisa.

### CSS (`style.css`)

Estiliza a página para garantir uma boa experiência de usuário:
- **Fonte e Layout**: Utiliza a fonte Chakra Petch e configura o layout com Flexbox.
- **Estilização dos Elementos**: Define estilos para títulos, botões, inputs e a caixa de resultados.

### JavaScript (`dados.js`)

Define um array de objetos com informações sobre os atletas. Cada objeto contém:
- `titulo`: Nome do atleta.
- `descricao`: Descrição breve sobre o atleta.
- `link`: Link para mais informações.

### JavaScript (`app.js`)

Implementa a lógica para a busca de atletas:
```javascript
function pesquisar() {
    // Obtém o elemento de input onde o usuário digita o nome do atleta
    let inputPesquisar = document.getElementById('input-pesquisar');

    // Obtém o elemento onde o resultado da pesquisa será exibido
    let resultadoPesquisa = document.getElementById('resultado-pesquisa'); 

    // Busca o índice do objeto atleta no array de dados que corresponda ao valor digitado
    const indiceDoObjetoAtleta = dados.findIndex(nome => nome.titulo.toLowerCase() === (inputPesquisar.value).toLowerCase());

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
