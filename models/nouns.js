'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nouns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  nouns.init({
    singular: DataTypes.STRING,
    plural: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nouns',
  });
  return nouns;
};