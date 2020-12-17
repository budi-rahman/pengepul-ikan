'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PengepulOnline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PengepulOnline.hasMany(models.Freezer,{foreignKey: "pengepulOnlineId"})
      PengepulOnline.belongsTo(models.User,{foreignKey: "userId"})

      
    }
  };
  PengepulOnline.init({
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PengepulOnline',
  });
  return PengepulOnline;
};