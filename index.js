const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const express = require('express');
const app = express();


let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
    ]
}


let q = "insert into user (id, username, email, password) values ?";

let data = [];
for (let i = 1; i <= 100; i++) {
    data.push(getRandomUser());
}


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "mysql@123"
});

try {
    connection.query(q, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
    })
} catch (err) {
    console.log(err)
}

// connection.end();

// app.get('/', (req, res) => {
//     let q = `select count(*) from user`;

//     try {
//         connection.query(q, (err, result) => {
//             if (err) throw err;
//             console.log(result);
//             res.send(result);
//         })
//     } catch (err) {
//         console.log(err)
//         res.send('Some error occured')
//     }
//     // res.send('welcome to home page.')
// })

// app.listen('8080', () => {
//     console.log('server is listining st port 8080')
// })


