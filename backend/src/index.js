const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebsocket } = require("./websocket");

const app = express();
const server = http.Server(app)

setupWebsocket(server);

mongoose.connect("mongodb+srv://Fernando_Azevedo:kogiro1234@cluster0-8klva.mongodb.net/week10?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json());
app.use(routes);


//Métodos HTTP: GET, POST PUT DELETE

//Tipos de parâmetros: 

//Query Params: request.query (Filtros, ordenação, paginação ...) - GET
//Route Params:  request.params (Identificar um recurso na alteração ou remoção) - PUT & DELETE
//Body: request.body (Dados para criação ou alteração de um registro ) - POST & PUT

// MongoDB (Não-relacional)

server.listen(3333);