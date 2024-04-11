const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI
console.log(MONGO_URI)

exports.connect = () => {
    mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected!'))
    .catch((error) => console.log(error));
};
