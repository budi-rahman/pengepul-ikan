'use strict';
const pengepul = [
  {
    "userId": "1"
  }
]
pengepul.forEach(el => {
  el.createdAt = new Date ()
  el.updatedAt = new Date ()
}) 
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('PengepulOnlines', pengepul, {}) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('PengepulOnlines', null, {})
  }
};
