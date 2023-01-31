const { sequelize } = require('../../src/app/models');

module.exports = () => {
  return Promise.all(
    Object.keys(sequelize.models).map((key) => {
      return sequelize.models[key].destroy({ truncate: true, force: true });
    })
  );
};
//Object.keys(sequelize.models).map para percorrer todos os models que estão dentro do meu sequlize 
//key é o nome de cada um dos meus models
//destroy elimina algum tipo de dado
// truncate com o force deletará todos os dados la dentro
//como esse destroy retorna uma promisse eu preciso aguardar para que isso seja finalizado
//Para isso eu vou colocar o 'return Promise.all' envolvendo tudo, para quando eu chamar esse metodo ele chame todas as promisses que estao dentro dele
