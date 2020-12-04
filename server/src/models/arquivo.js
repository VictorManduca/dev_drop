'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class arquivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  arquivo.init(
    {
      UsuarioID: DataTypes.INTEGER,
      PastaID: DataTypes.INTEGER,
      Arquivo: DataTypes.BLOB('long'),
      eFavorito: DataTypes.TINYINT,
      Nome: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'arquivo',
      freezeTableName: true
    }
  )
  return arquivo
}
