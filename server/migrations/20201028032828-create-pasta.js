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
        UsuarioID: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        TipoCategoriaIndice: {
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pasta')
  }
}
