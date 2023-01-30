//todos essas tipagens estão na doc do sequelize: https://sequelize.org/api/v6/class/src/sequelize.js~sequelize
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false //não pode estar vazio
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true, //um usuário com o mesmo email só possa ser cadastrado uma unica vez
        allowNull: false
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      //como configuramos o timestamp precisamos criar os campos para armazenar esse dados
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },
  // o metodo down é o que a nossa migration precisa fazer caso a gente esteja voltando atras - desfazer a migration
  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("users");
  } 
};
