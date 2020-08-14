# node-rest-shop

#API #REST #Node JS #MongoDB 

É uma aplicação back-end, uma API Rest desenvolvida em Node.js, é uma ideia simples de um shopping, os dados são guardados na base de dados [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). Em seguida mostro a estrutura da API.
Foram usadas diversas tecnologias no desenvolvimento da API das quais importa destacar as seguintes:
- Bcrypt;
- Express;
- JsonWebToken;
- Mongoose;
- Morgan;
- Multer;
- Nodemon.

## Users
A API permite registar e eliminar utilizadores que podem ter acesso as funcionalidades. A estrutura dos acessos é a seguinte:
- /user/signup         {POST} - permite criar utilizador passando um email único e válido e uma senha.
- /user/login          {POST} - efectua a autenticação baseado no email e senha. Retorna um token.
- /user/delete/:userId {DELETE} - elimina utilizador baseado no userId.

## Products
A seguir é mostrada a estrutura dos acessos à registo, edição, eliminação e busca dos produtos do shop.
- /products/           {GET} - busca todos produtos registados.
- /products/:productId {GET} - retorna um produto passando o seu Id.
- /products/           {POST} - cria um produto tendo que passar o nome, preço e foto.
- /products/:productId {PATCH} - actualiza alguns dados do produto passando o productId.
- /products/:productId {PUT} - actualiza todos dados do produto através do productId.
- /products/:productId {DELETE} - elimina um produto através do productId.

## Orders
Registo de compra de um determinado producto e quantidade de produtos comprados.
- /orders/         {GET} - busca todos registos de compra.
- /orders/         {POST} - cria um registo de compra baseado na quantidade e Id do producto.
- /orders/:orderId {DELETE} - elimina um registo de compra através do orderId.
