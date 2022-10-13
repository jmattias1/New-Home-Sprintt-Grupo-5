"use strict";
const {hashSync} = require('bcryptjs')
const userDB = require('../../data/userDB.json')

const users = userDB.map(user => {
  return {
    ...user,
    createdAt: new Date()
  }
})


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", users, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};