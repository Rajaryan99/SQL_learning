const mongoose = require('mongoose');


main()
    .then((res) => {
        console.log('Connection successful');
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const user = mongoose.model('user', userSchema);

// const user1 = user({
//     name: "adam",
//     email: "adam@gmail.com",
//     age: 29,
// });

// user.insertMany([
//     { name: "tony", email: "tony@gmail.com", age: 50 },
//     { name: "Peter", email: "Peter@gmail.com", age: 27 },
//     { name: "bruce", email: "bruce@gmail.com", age: 55 },
//     { name: "paper", email: "pots@gmail.com", age: 47 },
//     { name: "natasha", email: "natasha@gmail.com", age: 45 },
// ]);

user.updateOne({ name: "bruce" }, { age: 99 })
    .then((res) => {
        console.log(res);
    }).catch(err => { console.log(err) });

// user1.save();

user.findByIdAndDelete('68aa0179b92810232a9cf8ea')
    .then(res => { console.log(res) }).catch(err => {
        console.log(err);
    })