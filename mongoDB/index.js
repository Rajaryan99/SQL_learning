const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./models/user');


const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set("views", path.join('views'));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.render('read', { users });
});

app.post('/create', async (req, res) => {
    try {
        let { name, email, image } = req.body;

        let createdUser = await userModel.create({
            name,
            email,
            image
        });

        console.log("user Created:", createdUser);
        res.redirect('/read')
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message });
    }

})


app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})