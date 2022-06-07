const req = require("express/lib/request")
const BookModel= require("../models/bookModel")

const createBook= async (req, res)=> { //PROBLEM1
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send(savedData)
}

const getBooksData= async (req, res)=> { //PROBLEM2
    let books = await BookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send(books)
}

const getBooksInYear= async (req,res)=>{ //PROBLEM3
    let inputYear = req.body.year
    let result = await BookModel.find({year:inputYear})
    res.send(result)
}

const getParticularBooks= async (req,res)=>{ //PROBLEM4
    let input = req.body
    let result = await (BookModel.find(input))
    res.send(result)
}

const getXINRBooks = async (req,res)=>{ //PROBLEM5
    let price = "prices.indianPrice"
    let result = await BookModel.find({[price]:{$in:["100INR","200INR","500INR"]}})
    res.send(result)
}

const getRandomBooks = async (req,res)=>{ //PROBLEM6
    let result = await BookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send(result)
}
module.exports = {
    createBook: createBook,
    getBooksData: getBooksData,
    getBooksInYear: getBooksInYear,
    getParticularBooks:getParticularBooks,
    getXINRBooks:getXINRBooks,
    getRandomBooks:getRandomBooks
}