# 📦 API REST de Produtos

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

```
Request → Route → Controller → Model → Database → Response
```

---

## 📌 Endpoints disponíveis

### 🔹 Rota de apresentação
**GET /**
- Retorna uma mensagem de boas-vindas da API

---

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
```

---

## ⚙️ Configuração do ambiente

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Crie um arquivo `.env` na raiz do projeto com as variáveis:
   ```
   DB_HOST=localhost
   DB_USER=usuario
   DB_PASSWORD=senha
   DB_NAME=nome_do_banco
   ```
4. Inicie o servidor:
   ```
   npm start
   ```

A API será executada em:
```
http://localhost:4000
```

---

## 📈 Próximas evoluções

- Cadastro de categorias
- Relacionamento entre produtos e categorias
- Validação de dados
- Paginação
- Autenticação
- Documentação com Swagger

---

## 🧠 Objetivo do projeto

Projeto desenvolvido com o objetivo de praticar:
- desenvolvimento de APIs REST
- organização e arquitetura backend
- integração com banco de dados

---

## 📝 Status do projeto

🚧 Em desenvolvimento

---

## 👤 Autor

Desenvolvido por **Cassio Lucio**
