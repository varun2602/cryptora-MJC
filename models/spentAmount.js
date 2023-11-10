const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const randomstring = require('randomstring');


const amountSpentSchema = new mongoose.Schema({
    
    user_email:{
        type:String,
        unique:true
    },
    amountSpent:{
        type:Number,
        default:0
    }
    
 

});
module.exports = mongoose.model("AmountSpentUpdated", amountSpentSchema)