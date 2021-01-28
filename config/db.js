const { Sequelize } = require("sequelize");
require("dotenv").config();

const password = process.env.MYSQL_PASSWORD;

const db = new Sequelize('miniurls_db', 'root', password, {
    host: 'localhost',
    dialect: 'mysql'
  });
module.exports = db