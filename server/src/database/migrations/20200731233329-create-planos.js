'use strict'

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('planos', {
    ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nome: {
      type: Sequelize.STRING
    },
    Preco: {
      type: Sequelize.DOUBLE
    }
  })
}

export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('planos')
}