'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Joke extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Joke.init({
    name: DataTypes.STRING,
    bot_id: DataTypes.INTEGER,
    robot: DataTypes.BOOLEAN,
    votes: DataTypes.INTEGER,
    Joke_text: {
      type: DataTypes.STRING,
      validate: {
        isNull: {
          msg: 'no joke'
        }
      }
    },
    funny: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Joke',
  });
  return Joke;
};