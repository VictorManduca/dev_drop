'use strict';
const { Model } = require('sequelize');
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
  };
  arquivo.init({
    usuarioaid: DataTypes.INTEGER,
    arquivo: DataTypes.STRING,
    efavorito: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'arquivo',
  });
  return arquivo;
};