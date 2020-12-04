'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class pasta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pasta.init(
    {
      UsuarioID: DataTypes.INTEGER,
      TipoCategoriaIndice: DataTypes.INTEGER,
      Nome: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'pasta',
      freezeTableName: true
    }
  )
  return pasta
}
