const { Model, DataTypes } = require('sequelize');
const { dateToString } = require('sqlstring');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTERGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  },
  {
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
);

module.exports = Category;
