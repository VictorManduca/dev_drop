'use strict'

export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('vinculo_usuario_pagamento', {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      VinculoPlanoUsuarioID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ApiToken: {
        type: Sequelize.STRING
      }
    })
    .then(_ => {
      return queryInterface.addConstraint('vinculo_usuario_pagamento', ['VinculoPlanoUsuarioID'], {
        type: 'foreign key',
        name: 'vinculo_usuario_pagamento_VinculoPlanoUsuarioID_FK',
        references: {
          table: 'vinculo_usuario_pagamento',
          field: 'ID'
        }
      })
    })
}

export function down(queryInterface, Sequelize) {
  return queryInterface.dropTable('vinculo_usuario_pagamento')
}