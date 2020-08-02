'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class planos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  planos.init({
    nome: DataTypes.STRING,
    preco: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'planos',
  });
  return planos;
};