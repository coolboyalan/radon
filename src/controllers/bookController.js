const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")

const createBook = async(req,res)=>{
    let data = req.body
    let output = await bookModel.create(data)
    res.send({bookAdded:output})
}
const createAuthor = async(req,res)=>{
    let data = req.body
    let output = await authorModel.create(data)
    res.send({authorAdded:output})
}
const chetanBhagatBooks = async(req,res)=>{
    let id = authorModel.find()
    res.send(id)
}

module.exports = {
    createBook:createBook,
    createAuthor:createAuthor,
    chetanBhagatBooks:chetanBhagatBooks
}