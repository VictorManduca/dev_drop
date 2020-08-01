'use strict'

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('arquivos', {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      UsuarioID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Arquivo: {
        type: Sequelize.STRING
      },
      eFavorito: {
        type: Sequelize.TINYINT
      }
    })
    .then(_ => {
      return queryInterface.addConstraint('arquivos', ['UsuarioID'], {
        type: 'foreign key',
        name: 'arquivos_UsuarioID_FK',
        references: {
          table: 'usuario',
          field: 'ID'
        }
      })
    })
}

export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('arquivos')
}