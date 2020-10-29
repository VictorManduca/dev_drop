'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable('permissao', {
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
        eAdministrador: {
          type: Sequelize.TINYINT
        }
      })
      .then(async _ => {
        return await queryInterface.addConstraint('permissao', {
          type: 'foreign key',
          fields: ['UsuarioID'],
          name: 'permissao_UsuarioID_fk',
          references: {
            table: 'usuario',
            field: 'ID'
          }
        })
      })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('permissao')
  }
}
