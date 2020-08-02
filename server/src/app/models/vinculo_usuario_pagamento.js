'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vinculoUsuarioPagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vinculoUsuarioPagamento.init({
    vinculoplanousuarioid: DataTypes.INTEGER,
    apitoken: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vinculoUsuarioPagamento',
  });
  return vinculoUsuarioPagamento;
};