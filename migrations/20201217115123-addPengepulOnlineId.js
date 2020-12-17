'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn ("Freezers", "pengepulOnlineId", {
      type: Sequelize.INTEGER,
      references: {
        model: {tableName: 'PengepulOnlines'},
        key: "id"
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Freezers', 'pengepulOnlineId')
  }
};
