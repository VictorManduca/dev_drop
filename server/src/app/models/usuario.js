/* import Sequelize from 'sequelize'
const { Model } = Sequelize

export default class Usuario extends Model {
	static init(sequelize) {
		super.init({
			nome: Sequelize.STRING,
			email: Sequelize.STRING,
			senha: Sequelize.STRING,
			token: Sequelize.STRING
		}, { sequelize })

		return this
	}
} */

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		nome: DataTypes.STRING,
		email: DataTypes.STRING,
		senha: DataTypes.STRING,
		token: DataTypes.STRING,
	});

	return User
}