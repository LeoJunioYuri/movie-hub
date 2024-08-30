# MovieHub

MovieHub é uma aplicação web para listar, visualizar e gerenciar filmes favoritos. A aplicação utiliza Vue 3, Vuex, e a API do The Movie Database (TMDb) para fornecer uma interface interativa para explorar filmes e gerenciar uma lista de favoritos.

## Funcionalidades

- **Listar Filmes**: Exibe uma lista de filmes com informações básicas como título, poster e avaliação.
- **Adicionar aos Favoritos**: Permite adicionar filmes à lista de favoritos.
- **Remover dos Favoritos**: Permite remover filmes da lista de favoritos.
- **Remover Todos os Favoritos**: Limpa a lista de favoritos com um único clique.
- **Tela Responsiva**: A aplicação é responsiva e funciona bem em dispositivos móveis e desktop.

## Tecnologias Utilizadas

- **Vue 3**: Framework JavaScript para construir a interface de usuário.
- **Vuex**: Gerenciamento de estado centralizado para Vue.js.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **SCSS**: Pré-processador CSS para estilização.
- **The Movie Database (TMDb) API**: API para obter dados de filmes.

## Pré-requisitos

- Node.js e pnpm instalados.
- Chave de API do TMDb (definida em uma variável de ambiente).

## Configuração do Projeto

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/SEU_USUARIO/movie-hub.git
   cd movie-hub

2. **Instale as Dependências**

    ```bash	
    pnpm install

3. **Configure a Chave da API do TMDb**
    -   Crie um arquivo .env na raiz do projeto e adicione sua chave de API do TMDb:
    ```env
    VITE_API_KEY=YOUR_TMDB_API_KEY

4. **Execute a aplicação**
    ```bash	
    pnpm dev

- A aplicação estará disponível em http://localhost:5173.

## Estrutura do Projeto

- **`/src`**: Código-fonte da aplicação.
  - **`/components`**: Componentes reutilizáveis como `MovieCard` e `SubmitButton`.
  - **`/views`**: Páginas da aplicação, incluindo `HomeView` e `FavoritesView`.
  - **`/services`**: Serviços para interação com APIs, como `movieService.ts`.
  - **`/store`**: Estado global da aplicação e gerenciador Vuex.
- **`/tests`**: Testes unitários e de integração.
- **`/public`**: Arquivos estáticos, como imagens e o arquivo `index.html`.

## Testes

Para executar os testes, use o seguinte comando:

    ```bash
    pnpm test

- Os testes estão localizados em /src/tests e incluem testes para a Vuex store e componentes.

## Contato
- Email: leojunioyuri@hotmail.com
- GitHub: https://github.com/LeoJunioYuri


