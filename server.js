// const express = require('express');
// const app = express();
// const path = require('path');
// const PORT = 1212;
// const SQL = require('mysql');

// app.use(express.static(path.join(__dirname, 'jsFile')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.listen(PORT, () => {
//     console.log('Listening on port ', PORT);
// });

// var conn = SQL.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Zz..0000',
// });

// conn.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('SQL connected');
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/html/main.html');
// });

const express = require('express');
const app = express();
const PORT = 3030;
const path = require('path');
const mysql = require('mysql');
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const { db } = require('./DB/connection');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'javascriptFile')));

app.listen(PORT, () => {
    console.log(`^_^ . To Open App, Open http://localhost:${PORT}`);
});

const { runQuery } = require('./repository/query');

db.sequelize
    .sync()
    .then((e) => {
        console.log('yes!.. Sequelize has sync successfully');
        runQuery();
    })
    .catch((e) => {
        console.log('oops error,, when sync', e);
    });

app.get('/', (req, res) => {
    res.sendFile('main.html', { root: 'html' });
});

// const db = mysql.createConnection({
//     user: 'yuncheng',
//     host: 'localhost',
//     database: 'first',
//     password: 'password',
// });

// db.connect((err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log('SQL connected');
// });
// db.query('select * from user;', (err, result) => {
//     console.log(result, '!!!');
// });

app.post('/adduser', (req, res) => {
    let obj = req.body;
});
