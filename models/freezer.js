'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Freezer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Freezer.belongsToMany(models.Nelayan, { foreignKey: 'freezerId', through: 'NelayanFreezers' })
      Freezer.belongsTo(models.PengepulOnline, {foreignKey: "pengepulOnlineId"})
    }
    generateKilos() {
      return this.stockIkan + 'Kg' ;
    }
  };
  Freezer.init({
    namaIkan: DataTypes.STRING,
    stockIkan: DataTypes.INTEGER,
    pengepulOnlineId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Freezer',
  });
  return Freezer;
};