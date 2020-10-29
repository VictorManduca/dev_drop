'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable('grupo', {
        id: {
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
        PermissaoID: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        Nome: {
          type: Sequelize.STRING
        }
      })
      .then(async _ => {
        return await queryInterface.addConstraint('grupo', {
          type: 'foreign key',
          fields: ['UsuarioID'],
          name: 'grupo_UsuarioID_fk',
          references: {
            table: 'usuario',
            field: 'ID'
          }
        })
      })
      .then(async _ => {
        return await queryInterface.addConstraint('grupo', {
          type: 'foreign key',
          fields: ['PastaID'],
          name: 'grupo_PastaID_fk',
          references: {
            table: 'pasta',
            field: 'ID'
          }
        })
      })
      .then(async _ => {
        return await queryInterface.addConstraint('grupo', {
          type: 'foreign key',
          fields: ['PermissaoID'],
          name: 'grupo_PermissaoID_fk',
          references: {
            table: 'permissao',
            field: 'ID'
          }
        })
      })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('grupo')
  }
}
