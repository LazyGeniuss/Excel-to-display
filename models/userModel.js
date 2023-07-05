const { DataTypes} = require('sequelize');
const sequelize = require('../config/db'); 


const Employee = sequelize.define('Employee', {
  EmployeeID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  EmployeeName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EmployeeStatus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  JoiningDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  BirthDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Skills: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SalaryDetails: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Address: {
    type: DataTypes.STRING,
    allowNull: true,
  }},{
    tableName:"employees",
  }
);

module.exports = Employee;
