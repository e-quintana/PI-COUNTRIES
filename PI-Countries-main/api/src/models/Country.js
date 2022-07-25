const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING(3),
      allowNull: false, //no permite que este vacio
      primaryKey: true 
    }, 
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    flag:{
      type: DataTypes.STRING,
      allowNull: false
    },

    continent:{
      type: DataTypes.STRING,
      allowNull: false
    },

    capital:{
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: "Inexistent Capital"
    },

    subregion:{
      type: DataTypes.STRING,
      allowNull: true
    },

    area:{
      type: DataTypes.INTEGER,
      allowNull: true
    },

    population:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
