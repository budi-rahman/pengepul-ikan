'use strict';
const admin = [
  {
    "role": "Admin",
    "username": "admin",
    "password": "root"
  }
]
admin.forEach(el => {
  el.createdAt = new Date ()
  el.updatedAt = new Date ()
}) 
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('Users', admin, {}) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Users', null, {})
  }
};
