const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    address:{
        type:String,
        required:true,
    },
    paymentid:{
        type:String,
        required:true,
    },
    productname:{
        type:String,
        required:true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('order',OrderSchema)