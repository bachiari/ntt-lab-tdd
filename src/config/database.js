module.exports = {
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  dialect: "postgres", //tipo de base que estou utilizando
  //storage: "./__tests__/database.sqlite",
  logging: false, //nao mostrar tantos logs quando rodar as migrations
  define: {
    timestamps: true, //define no banco a atualização de cada registro com data de criação e atualização automatico
    underscored: true, //cria a tabela em formato de underline e não camel case
    underscoredAll: true //regra acima ser aplicada nos campos também
  }
};