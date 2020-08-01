'use strict'

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('vinculo_planos_usuario', {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      UsuarioID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      PlanosID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    })
    .then(_ => {
      return queryInterface.addConstraint('vinculo_planos_usuario', ['UsuarioID'], {
        type: 'foreign key',
        name: 'vinculo_planos_usuario_UsuarioID_FK',
        references: {
          table: 'usuario',
          field: 'ID'
        }
      })
    })
    .then(_ => {
      return queryInterface.addConstraint('vinculo_planos_usuario', ['PlanosID'], {
        type: 'foreign key',
        name: 'vinculo_planos_usuario_PlanosID_FK',
        references: {
          table: 'planos',
          field: 'ID'
        }
      })
    })
}

export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('vinculo_planos_usuario')
}