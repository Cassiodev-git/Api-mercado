# 📦 API REST de Produtos

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

API REST desenvolvida em **Node.js** utilizando **Express** e **Sequelize**, com foco em **boas práticas de arquitetura**, separação de responsabilidades e aprendizado de backend.

O projeto simula uma **API de mercado**, permitindo o cadastro e listagem de produtos, servindo como base para futuras evoluções.

> ⚠️ **Observação:** por motivos de segurança, as credenciais de conexão com o banco de dados não estão incluídas no repositório.  
> A API depende de variáveis de ambiente definidas em um arquivo `.env`, que não é versionado.

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

A aplicação segue uma arquitetura em camadas:

- **Routes**: definição das rotas HTTP  
- **Controllers**: regras de negócio e respostas da API  
- **Models**: definição das entidades e acesso ao banco de dados  
- **Config**: configuração da conexão com o banco  
- **Server**: inicialização da aplicação  

Fluxo da aplicação:

---

## 📌 Endpoints disponíveis

### 🔹 Rota inicial
**GET /**  
- Retorna uma mensagem de boas-vindas da API

### 🔹 Produtos

**GET /produtos**  
- Lista todos os produtos cadastrados

**POST /produtos**  
- Cadastra um novo produto  

Exemplo de corpo da requisição:

```json
{
  "nome": "Arroz Branco 5kg",
  "preco": 27.90,
  "quantidade": 50
}
⚙️ Configuração do ambiente

Clone o repositório:

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

📈 Próximas evoluções

Cadastro de categorias

Relacionamento entre produtos e categorias

Validação de dados

Paginação

Autenticação

Documentação com Swagger

🧠 Objetivo do projeto

Praticar:

Desenvolvimento de APIs REST

Organização e arquitetura de backend

Integração com banco de dados
## 📝 Status do projeto

🚧 Em desenvolvimento

---

## 👤 Autor

Desenvolvido por **Cassio Lucio**
