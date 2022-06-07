const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")

const createBook = async(req,res)=>{ //PROBLEM1.1
    let data = req.body
    if (await authorModel.findOne({author_id: data.author_id})) {
        let output = await bookModel.create(data)
        res.send({bookAdded:output})
    }else res.send({msg:"Not a recognized author"})
}
const createAuthor = async(req,res)=>{ //PROBLEM1.2
    let data = req.body
    if (await authorModel.findOne({author_id: data.author_id})) {
        let output = await authorModel.create(data)
        res.send({authorAdded:output})
    }else res.send({msg:"Not a recognized author"})
}
const chetanBhagatBooks = async(req,res)=>{ //PROBLEM2
    let author = await authorModel.findOne({author_name:"Chetan Bhagat"})
    let id = author.author_id
    let output = await bookModel.find({author_id:id})
    res.send(output)
}
const updateBook = async(req,res)=>{ //PROBLEM3
    let book = await bookModel.findOneAndUpdate({name:"Two States"},{$set:{price:100}},{new:true})
    let id = book.author_id
    let price = book.price
    let output = await (authorModel.findOne({author_id:id}))
    let author = output.author_name
    res.send({"author":author,price:price})
}
const authorName = async (req,res)=>{ //PROBLEM4
    let books = await bookModel.find({price:{$gte:50,$lte:100}})
    let result = []
    books.forEach(async (book,index)=>{
        let a = await authorModel.findOne({author_id:book.author_id}).select({author_name:1})
       result.push(a.author_name)
       if(index==books.length-1) res.send(result)
    //    console.log(result);
    })
}
module.exports = {
    createBook:createBook,
    createAuthor:createAuthor,
    chetanBhagatBooks:chetanBhagatBooks,
    updateBook:updateBook,
    authorName:authorName
}