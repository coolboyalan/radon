const mongoose = require("mongoose")

const authorModel = new mongoose.Schema({
    
    author_id : {
        type:Number,
        required:true
    },
    author_name: {
        type:String,
        required:true
    },
    age : Number,
    address: String
})

module.exports = mongoose.model("author", authorModel)