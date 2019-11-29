const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const estimationSchema = new Schema({
    crop : {
    type : String,
    required : true
    },
    currentprice : {
        type : Number,
        required : true
    },
    duration : {
        type : Number,
        default : 90
    },
    activities : [Object],
    city : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now()
    }
})

module.exports = Estimation = mongoose.model('estimations',estimationSchema)