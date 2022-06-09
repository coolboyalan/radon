const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: {
        type:String,
        required:true
    },
    author: {
        type: ObjectId,
        ref: "Author"
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "Publisher"
    },
    isHardCover: {
        type:Boolean,
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)
