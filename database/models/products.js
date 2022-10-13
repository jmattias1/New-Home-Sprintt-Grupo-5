'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.hasMany(models.Images,{
        as : 'images',
        foreignKey : 'productId',
        onDelete : 'cascade'
      })
      Products.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      })
      Products.belongsTo(models.subCategory,{
        as : 'subcategory',
        foreignKey : 'subCategoryId'
      })
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};