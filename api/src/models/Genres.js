const { DataTypes } = require('sequelize');
//Tabla de generos solo pide nombre e id

module.exports = (sequelize) => {
    
    sequelize.define('genres', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
};