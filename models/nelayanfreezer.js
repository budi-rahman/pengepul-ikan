'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NelayanFreezer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NelayanFreezer.init({
    nelayanId: DataTypes.INTEGER,
    freezerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'NelayanFreezer',
  });
  return NelayanFreezer;
};