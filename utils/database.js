const Sequilize = require("sequelize");

const DB_NAME = "node-todo";
const USER_NAME = "root";
const PASSWORD = "a12345678";

const sequelize = new Sequilize(DB_NAME, USER_NAME, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
