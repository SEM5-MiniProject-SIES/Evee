const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://Aman:amanajmal@cluster0.m4ak2.mongodb.net/evee?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to mongo");
    })
}

module.exports = connectToMongo