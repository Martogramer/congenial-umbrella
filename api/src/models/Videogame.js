const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
