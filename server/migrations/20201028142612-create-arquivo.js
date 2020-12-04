'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable('arquivo', {
        ID: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        UsuarioID: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        PastaID: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        Arquivo: {
          type: Sequelize.BLOB('long')
        },
        eFavorito: {
          type: Sequelize.TINYINT
        },
        Nome: {
          type: Sequelize.STRING
        }
      })
      .then(async _ => {
        return await queryInterface.addConstraint('arquivo', {
          type: 'foreign key',
          fields: ['UsuarioID'],
          name: 'arquivo_UsuarioID_fk',
          references: {
            table: 'usuario',
            field: 'ID'
          }
        })
      })
      .then(async _ => {
        return await queryInterface.addConstraint('arquivo', {
          type: 'foreign key',
          fields: ['PastaID'],
          name: 'arquivo_PastaID_fk',
          references: {
            table: 'pasta',
            field: 'ID'
          }
        })
      })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('arquivo')
  }
}
