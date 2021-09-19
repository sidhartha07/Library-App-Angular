const express= require("express");
const Bookdata = require("../model/bookData");
const booksRouter=express.Router();
const bookData=require('../model/bookData')
const multer=require("multer");
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bodyParser = require("body-parser");

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     }
// });
 
// var upload = multer({ storage: storage });



function router(nav){
booksRouter.use(express.urlencoded({extended:true}))
booksRouter.use(express.json())
booksRouter.options('/', cors())
booksRouter.options('/:id', cors())
booksRouter.options('/add', cors())
booksRouter.options('/update', cors())
booksRouter.options('/remove/:id', cors())


booksRouter.get('/',cors(),(req,res)=>{
    Bookdata.find()
    .then((books)=>{
        res.send(books)
    })

    
});

booksRouter.get('/:id',cors(),(req,res)=>{
    const id = req.params.id;

    bookData.findOne({_id: id})
    .then((book)=>{
        res.send(book);
    })

  
});

booksRouter.post('/add',cors(),function(req,res){
   
    console.log(req.body);
   
    var book = { 
      title:req.body.title,
      author:req.body.author,
      genre:req.body.genre,
      image:req.body.image
   
   }       
   var book = new bookData(book);
   book.save();
});

booksRouter.put('/update',cors(),verifyToken,(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    title=req.body.title,
    author=req.body.author,
    genre=req.body.genre,
    image=req.body.image
   bookData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "title":title,
                                "author":author,
                                "genre":genre,
                                "image":image
                            }})
   .then(function(){
       res.send();
   })
 })
 
 booksRouter.delete('/remove/:id',cors(),verifyToken,(req,res)=>{
 
   id = req.params.id;
   bookData.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })




return booksRouter;

}

module.exports=router;