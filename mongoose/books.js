const mongoose = require('mongoose');


main()
    .then((res) => {
        console.log('Connection successful');
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    auther: {
        type: String,
    },

    price: {
        type: Number,
    },
    discount: {
        type: Number,
        default: 10,
    }
});

const books = mongoose.model('books', bookSchema);


const book1 = new books({
    title: "JAVA made Easy",
    auther: "Narsimha Karumnchi",
    price: 700,
});

book1.save()
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });