'use strict';
const nelayan = [
  {
    "namaNelayan": "PT. Nelayan Mina Lestari"
  },
  {
    "namaNelayan": "PT. Nelayan Samudra Jaya"
  },
  {
    "namaNelayan": "PT. Nelayan Tenggara"
  },
  {
    "namaNelayan": "PT. Indonesia Nelayan Bersatu"
  },
  {
    "namaNelayan": "PT. Nelayan Mitra Mandiri"
  }
]
nelayan.forEach(el => {
  el.createdAt = new Date ()
  el.updatedAt = new Date ()
}) 
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('Nelayans', nelayan, {}) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Nelayans', null, {})
  }
};
