![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

API REST desenvolvida em **Node.js** utilizando **Express** e **Sequelize**, com foco em **organização de backend**, separação de responsabilidades e aplicação de boas práticas.

O projeto simula um **sistema de mercado**, permitindo o gerenciamento de **produtos, categorias e usuários**, servindo como base para futuras evoluções como autenticação e controle de acesso.

> ⚠️ **Observação:** por motivos de segurança, as credenciais de conexão com o banco de dados não estão incluídas no repositório.  
> A aplicação utiliza variáveis de ambiente definidas em um arquivo `.env`, que não é versionado.

---

## 🚀 Tecnologias utilizadas

- Node.js  
- Express  
- Sequelize  
- MariaDB  
- JavaScript (ES Modules)  
- dotenv  

---

## 🧱 Arquitetura

A aplicação segue uma arquitetura em camadas, priorizando legibilidade e manutenção do código:


.
├── config/          # Configuração da conexão com o banco de dados
├── controllers/     # Lógica das requisições e respostas
├── middlewares/     # Validação e normalização de dados
├── models/          # Entidades e relacionamentos (ORM)
├── routes/          # Definição das rotas HTTP
└── server.js        # Inicialização da aplicação

Fluxo da aplicação:

---

### Responsabilidades

- **Routes**: definem os endpoints e direcionam para os controllers  
- **Controllers**: processam as requisições e retornam as respostas  
- **Models**: representam as entidades e o acesso ao banco de dados  
- **Middlewares**: validam e preparam os dados antes de chegar aos controllers  
- **Config**: centraliza a configuração da conexão com o banco  
  


---

## 📌 Endpoints disponíveis

### 🔹 Rota inicial
**GET /**  
- Retorna uma mensagem de boas-vindas da API

---

### 🔹 Produtos

**GET /produtos**  
- Lista todos os produtos cadastrados

**POST /produtos**  
- Cadastra um novo produto

---

### 🔹 Categorias

**GET /categorias**  
- Lista todas as categorias cadastradas

**POST /categorias**  
- Cadastra uma nova categoria

---

### 🔹 Usuários

**GET /usuarios**  
- Lista todos os usuários cadastrados

**POST /usuarios**  
- Cadastra um novo usuário

Exemplo de corpo da requisição:

```json
{
  "nome": "Arroz Branco 5kg",
  "preco": 27.90,
  "quantidade": 50
}


## ⚙️ Configuração do ambiente

### Clone o repositório:

git clone https://github.com/Cassiodev-git/nome-do-repositorio


Instale as dependências:

npm install


Crie o arquivo .env na raiz do projeto com as variáveis:

DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=senha
DB_NAME=nome_do_banco


Inicie o servidor:

npm start


A API será executada em:

http://localhost:4000


---

## 📈 Próximas evoluções

- Cadastro de categorias  
- Relacionamento entre produtos e categorias  
- Validação de dados  
- Paginação  
- Autenticação  
- Documentação com Swagger  

## 📝 Status do projeto

🚧 Em desenvolvimento

---

## 👤 Autor

Desenvolvido por **Cássio Lúcio**


