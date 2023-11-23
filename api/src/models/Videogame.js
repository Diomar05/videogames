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

    descripción:{
      type: DataTypes.TEXT,
      allowNull: false,
    },

    plataformas:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    imagen:{
      type: DataTypes.TEXT,
      allowNull: false,
    },

    fecha:{
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
