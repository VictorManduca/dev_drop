'use strict'

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('categoria', {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ArquivoID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      UsuarioID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      TipoCategoriaID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    })
    .then(_ => {
      return queryInterface.addConstraint('categoria', ['ArquivoID'], {
        type: 'foreign key',
        name: 'categoria_ArquivoID_FK',
        references: {
          table: 'arquivo',
          field: 'ID'
        }
      })
    })
    .then(_ => {
      return queryInterface.addConstraint('categoria', ['UsuarioID'], {
        type: 'foreign key',
        name: 'categoria_UsuarioID_FK',
        references: {
          table: 'usuario',
          field: 'ID'
        }
      })
    })
    .then(_ => {
      return queryInterface.addConstraint('categoria', ['TipoCategoriaID'], {
        type: 'foreign key',
        name: 'categoria_TipoCategoriaID_FK',
        references: {
          table: 'tipo_categoria',
          field: 'ID'
        }
      })
    })
}

export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('categoria')
}