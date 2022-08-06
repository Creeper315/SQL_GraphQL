//
// id, username, email, age
// const Sequelize = require('sequelize');

module.exports = (Sequelize, seq) => {
    let table1 = seq.define('table1', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            field: 'id',
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
    return table1;
};
