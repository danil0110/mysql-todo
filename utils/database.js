const Sequelize = require('sequelize');

const DB_NAME = 'mysql_todo';
const DB_USERNAME = 'root';
const DB_PASSWORD = '12345678';

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
	host: 'localhost',
	dialect: 'mysql',
});

module.exports = sequelize;
