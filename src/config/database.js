require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

module.exports = {
  host: process.env.POSTGRES_HOST,
  username: 'postgres',
  password: 'postgres',
  database: process.env.POSTGRES_NAME,
  dialect: "postgres", //tipo de base que estou utilizando
  storage: './__tests__/database.sqlite', // caminho caso esteja usando sqlite
  logging: false, //nao mostrar tantos logs quando rodar as migrations
  define: {
    timestamps: true, //define no banco a atualização de cada registro com data de criação e atualização automatico
    underscored: true, //cria a tabela em formato de underline e não camel case
    underscoredAll: true //regra acima ser aplicada nos campos também
  }
};
