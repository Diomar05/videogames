const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    slug:{
      type: DataTypes.TEXT,
      allowNull: false,
    },

    platform:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    background_image:{
      type: DataTypes.TEXT,
      allowNull: false,
    },

    released:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    rating:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  },
  { timestamps: false, });
};
