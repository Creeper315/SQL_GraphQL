//
const usr = 'yuncheng';
const password = 'password';
const database = 'first';

const Sequelize = require('sequelize');

const seq = new Sequelize(database, usr, password, {
    host: 'localhost',
    dialect: 'mysql',
});

let db = {};
db.Sequelize = Sequelize;
db.seq = seq;
db.user = require('../models/user')(Sequelize, seq);
module.exports = { db, seq };
