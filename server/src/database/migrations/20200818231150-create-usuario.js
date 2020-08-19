'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('usuario', {
			ID: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			Nome: {
				type: Sequelize.STRING
			},
			Email: {
				type: Sequelize.STRING
			},
			Senha: {
				type: Sequelize.STRING
			},
			Token: {
				type: Sequelize.STRING
			}
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable('usuario')
	}
};