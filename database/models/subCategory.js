'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      subCategory.hasMany(models.Products,{
        as : 'products',
        foreignKey : 'subCategoryId'
      })
    }
  }
  subCategory.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subCategory',
  });
  return subCategory;
};