const mongoose = require("mongoose")

const bookModel = mongoose.Schema({
    
    name: {
        type:String,
        required:true
    },
    authorName: {
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model("Book",bookModel)