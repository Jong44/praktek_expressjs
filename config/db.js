const mongoose = require('mongoose');

const mongoDB = async function main(){
    await mongoose.connect('mongodb://localhost:27017/praktikumkk4c');
    console.log("DB CONNECTED");
}


module.exports = mongoDB