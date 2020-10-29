'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class tipo_categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tipo_categoria.init(
    {
      indice: DataTypes.INTEGER,
      descricao: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'tipo_categoria',
      freezeTableName: true
    }
  )
  return tipo_categoria
}
