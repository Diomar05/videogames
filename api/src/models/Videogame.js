const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogames', {
    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    descripcion:{
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

    released:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    rating:{
      type: DataTypes.FLOAT,
      allowNull: false,
    }

  },
  { timestamps: false, });
};
