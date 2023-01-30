require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const express = require("express");

class AppController {
  constructor() {
    this.express = express(); //aqui está meu app.. onde posso usar o .listen pra alocar o app em uma porta no meu pc

    this.middlewares();
    this.routes();
  }
  //registro de middlewares
  middlewares() {
    this.express.use(express.json()); //entender os corpos enviado pro app como json
  }
  //registro de rotas
  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().express; //retorno apenas a prop express que engloba tudo aqui em cima
