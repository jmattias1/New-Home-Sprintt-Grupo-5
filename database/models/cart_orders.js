'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart_orders.belongsTo(models.Users,{
        as : 'user',
        foreignKey : 'userId',
        onDelete : 'cascade'
      })
    }
  }
  Cart_orders.init({
    date: DataTypes.DATE,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_orders',
  });
  return Cart_orders;
};