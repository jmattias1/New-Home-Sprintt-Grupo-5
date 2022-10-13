"use strict";

const subCategories = [
  {
    name: "Samsung",
    createdAt: new Date(),
  },
  {
    name: "Sony",
    createdAt: new Date(),
  },
  {
    name: "Motorola",
    createdAt: new Date(),
  },
  {
    name: "LG",
    createdAt: new Date(),
  },
  {
    name: "Dream",
    createdAt: new Date(),
  },
  {
    name: "philips",
    createdAt: new Date(),
  },
  {
    name: 'HP',
    createdAt: new Date(),
  },
  {
    name: "Microsoft",
    createdAt: new Date(),
  },
];
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("subCategories", subCategories, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("subCategories", null, {});
  },
};