const express = require('express');
const app = express();

const usermodel = require('./usermodel')

const port = 5000;

app.get('/', (req, res) => {
    res.send('hello world');
})

app.get('/create', async (req, res) => {
    let newuser = await usermodel.create({
        name: "Raju",
        email: 'raju@gmail.com',
        username: "@raju"
    },
    )

    res.send(newuser)
})

app.get('/update', async (req, res) => {
    let updateuser = await usermodel.findOneAndUpdate({ username: "@raj_aryan" }, { name: "Raj Aryan" }, { new: true });
    res.send(updateuser)
})


app.get('/read', async (req, res) => {
    let user = await usermodel.find();
    res.send(user)
})


app.get('/delete', async (req, res) => {
    let user = await usermodel.findOneAndDelete({ username: "@raju" });
    res.send(user)
})



app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})