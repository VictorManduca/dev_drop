'use strict'

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('usuario', {
    ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: Sequelize.STRING
    },
    Email: {
      type: Sequelize.STRING
    },
    Senha: {
      type: Sequelize.STRING
    },
    Token: {
      type: Sequelize.STRING
    }
  })
}

export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('usuario')
}