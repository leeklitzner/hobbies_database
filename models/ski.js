'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ski = sequelize.define('Ski', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Ski.associate = function(models) {
    // associations can be defined here
  };
  return Ski;
};