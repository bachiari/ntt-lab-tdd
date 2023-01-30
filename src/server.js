const app = require("./app");

app.listen(process.env.PORT || 3000); //facilita o deploy da nossa aplicação pq se nao tiver a variavel de ambiente ele entende a porta como 3000
