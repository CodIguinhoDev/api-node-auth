API REST para autenticação de usuários com cadastro, login, proteção de rotas por JWT e documentação interativa com Swagger.
O projeto foi desenvolvido com foco em boas práticas de arquitetura, separação de responsabilidades e segurança, servindo como estudo.

---

# Demonstração

## Documentação Swagger

![Swagger](https://github.com/user-attachments/assets/8f8aadd0-763a-4613-9f96-2dd1610ce2f3)

---

## Cadastro de Usuário

![Cadastro](https://github.com/user-attachments/assets/b568b939-927a-485d-9acd-68affbd91981)

---
## Token JWT retornado

![Token](https://github.com/user-attachments/assets/a494645c-bbb9-429f-91ba-0300ec985011)

---

## Login realizado

![Login](https://github.com/user-attachments/assets/450bc36b-ed66-441f-967f-75888741ef44)

---

## Usuário salvo no MongoDB

![Mongo](https://github.com/user-attachments/assets/903b6e30-1017-47b2-bb8c-717f8ff5c7b6)

---

## Rate Limit - Cadastro

![Register Limit](https://github.com/user-attachments/assets/51a7a27a-2088-448e-9016-68e4eba12aec)

---

## Rate Limit - Login

![Login Limit](https://github.com/user-attachments/assets/3e4a5a7b-f49e-42e0-8135-026771e8d16a)

---

## Como executar

### Clone o projeto

```bash
git clone https://github.com/CodIguinhoDev/api-node-auth.git
```

### Entre na pasta

```bash
cd user-auth
```

### Instale as dependências

```bash
npm install
```

### Configure o arquivo `.env`

```env
PORT=porta_para_iniciar_um_servidor

PASSWORD_MONGO=senha_do_mongodb
USER_MONGO=seu_usuario_do_mongo
MONGO_DB=nome_do_banco

ACCESS_TOKEN_KEY=sua_chave
```

### Execute

```bash
npm start
```

---

## Endpoints

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| POST | `/register` | Cadastro de usuário |
| POST | `/login` | Login do usuário |
| GET | `/message` | Rota protegida por JWT |

---

## Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- bcrypt
- Express Rate Limit
- Swagger
