'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable('pasta', {
        ID: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ArquivoID: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        UsuarioID: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        TipoCategoriaID: {
          type: Sequelize.INTEGER
        },
        Nome: {
          type: Sequelize.STRING
        }
      })
      .then(async _ => {
        return await queryInterface.addConstraint('pasta', {
          type: 'foreign key',
          fields: ['UsuarioID'],
          name: 'pasta_UsuarioID_fk',
          references: {
            table: 'usuario',
            field: 'ID'
          }
        })
      })
      .then(async _ => {
        return await queryInterface.addConstraint('pasta', {
          type: 'foreign key',
          fields: ['ArquivoID'],
          name: 'pasta_ArquivoID_fk',
          references: {
            table: 'arquivo',
            field: 'ID'
          }
        })
      })
      .then(async _ => {
        return await queryInterface.addConstraint('pasta', {
          type: 'foreign key',
          fields: ['TipoCategoriaID'],
          name: 'pasta_TipoCategoriaID_fk',
          references: {
            table: 'tipo_categoria',
            field: 'ID'
          }
        })
      })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pasta')
  }
}
