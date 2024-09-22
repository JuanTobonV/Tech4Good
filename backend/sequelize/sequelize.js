const { Sequelize } = require ('sequelize');  //Importamos sequelize
const { config } = require('../config/config'); //Importamos la configuracion de la base de datos
const setUpModel = require('../db/models');

const options = {
  dialect:'postgres', // el gestor de base de datos a usar
  logging: true, // loggin de sequelize esta encendido en dev
}

const sequelize = new Sequelize (config.dbUrl,options);

setUpModel(sequelize);
module.exports = sequelize;
