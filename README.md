# Try-On IMVU Project

Um projeto para gerar links de "try-on" para produtos da plataforma IMVU, permitindo que os usuários visualizem e salvem imagens dos produtos em seus avatares.

---

## 🚀 Funcionalidades

- Extrai IDs de produtos de links IMVU.
- Gera links de "try-on" para visualização no navegador.
- Permite salvar a imagem gerada como PNG.
- Automação de login e captura de imagens com Puppeteer.

---

## 📦 Estrutura do Projeto

O projeto está organizado da seguinte forma:

try-on-project/
│
├── backend/ # Código do servidor Node.js
│ ├── server.js # Servidor para gerar links de try-on
│ ├── package.json # Dependências do backend
│ └── package-lock.json # Versões exatas das dependências
│
├── frontend/ # Interface do usuário
│ ├── index.html # Página principal
│ ├── styles.css # Estilos CSS
│ └── script.js # Lógica JavaScript
│
├── puppeteer/ # Automação com Puppeteer
│ ├── try-on.js # Script para captura de imagens
│ └── package.json # Dependências do Puppeteer
│
├── README.md # Documentação do projeto
└── .gitignore # Arquivos ignorados pelo Git


---

## 🛠️ Como Configurar

### Pré-requisitos

- Node.js (v18 ou superior)
- NPM (geralmente vem com o Node.js)
- Conta IMVU para autenticação

### Passos para Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/souandresouza/try-on-project.git
   cd try-on-project
   ```

2. **Instale as Dependências**:
   ```bash
   npm install
   ```

3. **Inicie o Servidor**:
   ```bash
   node backend/server.js
   ```

4. **Acesse o Projeto**:
   Abra o navegador e navegue para http://localhost:3000/

---

## 🌟 Contribuind
Agradecimentos a todos os contribuidores que ajudaram no desenvolvimento desse projeto.

## 📝 Licenca

Este projeto esta licenciado sob a licenca [MIT](https://choosealicense.com/licenses/mit/).

## 📝 Contato

- GitHub: [https://github.com/souandresouza](https://github.com/souandresouza)
- Email: [contatosouzaandre@gmail.com](mailto:contatosouzaandre@gmail.com)

---

# Obrigado por usar o Try-On IMVU Project!
