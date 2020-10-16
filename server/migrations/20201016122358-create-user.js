'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('usuario', {
			ID: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			Nome: {
				type: Sequelize.STRING
			},
			Email: {
				type: Sequelize.STRING
			},
			Senha: {
				type: Sequelize.STRING
			}
		})
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('usuario')
	}
};