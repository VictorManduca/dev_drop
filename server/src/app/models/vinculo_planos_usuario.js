'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vinculoPlanosUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vinculoPlanosUsuario.init({
    usuarioid: DataTypes.INTEGER,
    planosid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vinculoPlanosUsuario',
  });
  return vinculoPlanosUsuario;
};