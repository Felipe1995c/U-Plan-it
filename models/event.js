// Import parts from sequelize library
const { Model, DataTypes } = require("sequelize");

// Import database connection from connection.js
const sequelize = require("../config/database");

// Initialize event model by extending from Sequelize's Model class
class event extends Model {}

// Establish fields and rules for event model
event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dresscode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    food: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    rentals: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    supplies: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    entertainment: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "event",
  }
);

module.exports = event;
