const express = require('express');
const app = express();

const usermodel = require('./usermodel')

const port = 5000;

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/create', (req, res) => {
    usermodel.create({
        name: "Raj",
        email: 'rajaryan@gmail.com',
        username:"@raj_aryan"
    })
})


app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})