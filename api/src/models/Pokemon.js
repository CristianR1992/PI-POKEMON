const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true

    },
    
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },

    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    height: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    fromBDD:{
      type:DataTypes.BOOLEAN
    }

  }, { timestamps: false });
};

