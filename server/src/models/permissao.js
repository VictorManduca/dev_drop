'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permissao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  permissao.init({
    usuarioId: DataTypes.INTEGER,
    eAdministrador: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'permissao',
    freezeTableName: true
  });
  return permissao;
};