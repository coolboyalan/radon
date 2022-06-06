const bookModel = require("../models/bookModel")

const addNewBook =  async (req,res)=>{
    let data = req.body
    let book = await bookModel.create(data)
    res.send({msg:book})
}

const getAllBooks =  async (req,res)=>{
    let allBooks = await bookModel.find()
    res.send({msg:allBooks})
}

module.exports = {
    addNewBook:addNewBook,
    getAllBooks:getAllBooks
}