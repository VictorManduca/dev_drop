'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('tipo_categoria', {
			ID: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			Indice: {
				type: Sequelize.INTEGER
			},
			Descricao: {
				type: Sequelize.STRING
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('tipo_categoria');
	}
};