const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tourism', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true, //permite que este vacio
      primaryKey: true 
    }, 
    
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    difficulty:{
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
      allowNull: true,
    },

    duration:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    season:{
      type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
      allowNull: true,
      defaultValue: "All the year"
    }
  });
};
