# LinkMark Shop Front - Front-End (Next.js + TypeScript)

Este repositório contém o front-end do projeto LinkMark Shop, desenvolvido com Next.js e TypeScript. Este front-end faz parte de um sistema de e-commerce que exibe uma lista de produtos, permite buscas e navegação até a página de detalhes de cada produto.

### Descrição

O LinkMark Shop Front é o front-end de uma aplicação de e-commerce, onde os usuários podem visualizar uma lista de produtos na página inicial, realizar buscas por produtos específicos e acessar a página de detalhes de cada produto.

### Tecnologias Utilizadas

- Next.js (v14+)
- TypeScript
- React.js
- Tailwind CSS para estilização
- Lucide Icons para ícones
- Material Symbols para design de ícones adicionais
- Axios para requisições HTTP

### Funcionalidades

Página Inicial: Exibe uma lista de até 6 produtos com um campo de busca.
Busca por Produto: O usuário pode buscar por produtos pelo nome. A busca redireciona para a página de resultados ou diretamente para o produto, caso seja encontrado.
Página de Produto: Detalhes completos de um produto, como nome, descrição, preço, e imagem.
Design Responsivo: O front-end é completamente responsivo e otimizado para dispositivos móveis.

### Requisitos de Sistema

- Node.js (v20+)
- NPM ou Yarn como gerenciador de pacotes
- Git para versionamento de código

### Instalação

1. Clonar o Repositório

```
  git clone https://github.com/seu-usuario/linkmark-shop-front.git
  cd linkmark-shop-front
```

2. Instalar Dependências
   Execute o comando abaixo para instalar todas as dependências necessárias:

npm install

3. Configurar Variáveis de Ambiente
   Crie um arquivo .env.local na raiz do projeto com a seguinte variável:

NEXT_PUBLIC_API_URL=http://localhost:3001/api
Aqui, você deve substituir o valor de NEXT_PUBLIC_API_URL pelo endereço da sua API.

4. Executar o Projeto
   Após a instalação das dependências e configuração das variáveis de ambiente, execute o comando:

npm run dev
O projeto estará disponível em http://localhost:3000.

5. Estrutura de Pastas

```src/ # Código-fonte da aplicação
   ├── app/ # Diretório das páginas do Next.js
   │ ├── produtos/ # Página de exibição de produtos
   │ │ └── index.tsx # Página de produto específica
   │ ├── error.tsx # Página de erro genérica
   │ └── page.tsx # Página inicial (home)
   ├── assets/ # Arquivos de estilo global
   │ └── global.css # Estilos globais
   ├── components/ # Componentes reutilizáveis
   ├── hooks/ # Hooks customizados
   ├── templates/ # Templates reutilizáveis
   └── utils/ # Funções utilitárias
```

### Componentes Principais

- Página Inicial (index.tsx)
- Exibe os 6 produtos mais recentes na lista.
- Contém um campo de busca que permite ao usuário filtrar produtos pelo nome.
- Faz requisições à API para obter os produtos usando o serviço ProductService.

Página de Produto (/product/[id].tsx)
Exibe as informações detalhadas do produto selecionado, como nome, descrição, preço e imagem.
O ID do produto é obtido pela URL dinâmica.
Contribuição
Contribuições são bem-vindas! Siga os passos abaixo para contribuir com o projeto:

Faça um fork do projeto.

1. Crie uma branch com a sua feature: `git checkout -b minha-feature.`
2. Faça o commit das suas alterações: `git commit -m 'feat: Adicionando minha nova feature'.`
3. Envie suas alterações: `git push origin minha-feature.`
4. Abra um Pull Request para revisão.

### Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais informações.
