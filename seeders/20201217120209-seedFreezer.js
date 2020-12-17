'use strict';
const freezer = [
  {
    "namaIkan": "Tuna",
    "stockIkan": "0",
    "pengepulOnlineId": "1"
  },
  {
    "namaIkan": "Udang",
    "stockIkan": "0",
    "pengepulOnlineId": "1"

  },
  {
    "namaIkan": "Kakap",
    "stockIkan": "0",
    "pengepulOnlineId": "1"

  },
  {
    "namaIkan": "Teri",
    "stockIkan": "0",
    "pengepulOnlineId": "1"

  },
  {
    "namaIkan": "Tongkol",
    "stockIkan": "0",
    "pengepulOnlineId": "1"

  },
]
freezer.forEach(el => {
  el.createdAt = new Date ()
  el.updatedAt = new Date ()
}) 
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert ('Freezers', freezer, {}) 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete ('Freezers', null, {})
  }
};
