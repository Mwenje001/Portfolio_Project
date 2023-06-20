const mongoose = require('mongoose');




const IncomeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 100,
    },
    amount:{
        type: Number,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 100
    },
    type: {
        type: String,
        default: "Income",
    },
    date:{
        type: Date,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 100
    },
    category:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 100
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
}, {timestamp: true})


module.exports = mongoose.model('Income', IncomeSchema)