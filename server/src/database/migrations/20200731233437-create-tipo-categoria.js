'use strict'

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('tipo_categoria', {
    ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Indice: {
      type: Sequelize.INTEGER
    },
    Descricao: {
      type: Sequelize.STRING
    }
  })
}

export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('tipo_categoria')
}