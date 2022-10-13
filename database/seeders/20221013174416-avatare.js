"use strict";

const avatarDB = require('../../data/imagenUserDB.json')

const avatars = avatarDB.map(({avatar}, index) => {
  return{
    avatar: avatar,
    userId : index +1,
    createdAt : new Date()
  }
})


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Avatars", avatars, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Avatars", null, {});
  },
};