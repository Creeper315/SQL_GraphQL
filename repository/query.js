const { db } = require('../DB/connection');

function runQuery() {
    console.log('run query!');
    // db.sequelize.query(`select * from user;`, (err, result) => {
    //     console.log('query res ', err, result);
    // });
    db.seq
        .query(`select * from user;`, { type: db.Sequelize.QueryTypes.SELECT })
        .then((e) => {
            console.log('query res ', e);
        });
}

module.exports = { runQuery };
