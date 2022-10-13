'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsTo(models.Avatar,{
        as : 'avatar',
        foreignKey : 'userId'
      }),
      Users.belongsTo(models.Rols,{
        as : 'rol',
        foreignKey : 'rolId'
      })
      Users.belongsTo(model.Cart_orders,{
        as: 'orders',
        foreignKey: 'userId'
      })
    }
  }
  Users.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};