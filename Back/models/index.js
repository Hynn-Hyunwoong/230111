const Sequelize = require('sequelize');
const config = require('../config');
const db = config.db[config.env];

const sequelize = new Sequelize(db.database, db.username, db.userpassword, db);

//user.model.js
require("./user.model.js")(sequelize, Sequelize)

module.exports = {
    sequelize,
    Sequelize,
}

console.log(config);