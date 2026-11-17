# Digital Store

Uma loja virtual de artigos esportivos desenvolvida como projeto final do curso **Geração Tech 4.0**, utilizando React e Vite.

## Sobre o projeto

A Digital Store é uma aplicação de e-commerce com foco na apresentação e navegação de produtos, oferecendo uma experiência de compra por meio de uma interface moderna, organizada e responsiva.

O projeto foi desenvolvido com o objetivo de aplicar os conhecimentos adquiridos durante o curso, utilizando componentes reutilizáveis, organização de páginas e navegação entre diferentes seções da aplicação.

## Tecnologias utilizadas

- **React** – biblioteca para construção de interfaces.
- **Vite** – ferramenta de desenvolvimento e build.
- **JavaScript** – linguagem de programação.
- **CSS3** – estilização e responsividade.
- **React Router DOM** – gerenciamento de rotas e navegação.

## Funcionalidades

- Página inicial com apresentação da loja e produtos em destaque.
- Listagem de produtos.
- Visualização de detalhes dos produtos.
- Galeria de imagens dos produtos.
- Seleção de opções de produtos, como tamanho e cor, quando disponíveis.
- Navegação entre páginas.
- Filtros e organização da listagem de produtos.
- Interface responsiva para diferentes tamanhos de tela.

## Estrutura do projeto

```text
digital-store/
├── public/
│   └── Imagens e arquivos públicos
├── src/
│   ├── assets/
│   │   └── Imagens e ícones
│   ├── components/
│   │   └── Componentes reutilizáveis
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── HomePage/
│   │   ├── ProductListingPage/
│   │   ├── ProductViewPage/
│   │   └── MyOrdersPage/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Como executar o projeto localmente

### Pré-requisitos

- Node.js instalado.
- npm instalado.

### 1. Clonar o repositório

```bash
git clone https://github.com/heliiosantos/digital-store.git
```

### 2. Entrar na pasta do projeto

```bash
cd digital-store
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar a aplicação

```bash
npm run dev
```

Após executar o comando, acesse o endereço local exibido no terminal, geralmente `http://localhost:5173`.

### 5. Gerar a versão de produção

```bash
npm run build
```

## Links do projeto

- **Repositório GitHub:** https://github.com/heliiosantos/digital-store
- **Aplicação publicada:** https://digital-store-five-eosin.vercel.app/

## Considerações finais

A Digital Store representa a aplicação prática dos conhecimentos de desenvolvimento front-end adquiridos durante o curso Geração Tech 4.0, envolvendo criação de interfaces, componentização, organização de código, estilização e navegação entre páginas.
