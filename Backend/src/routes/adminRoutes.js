const express= require("express");
const adminRouter=express.Router();
const multer=require("multer");

 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
 
var upload = multer({ storage: storage });

// const fileFilter=(req, file, cb) =>{
//     if(file.mimetype === 'image/jpeg' || file.mimetype=== 'image/png'){
//     cb(null, true);
//     }else{
//     cb(null, false);
//     }
// }
// const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter
// })

const bookData = require('../model/bookData');
const authorData = require('../model/authorData');

function router(nav){

    adminRouter.get('/',(req,res)=>{
        res.render("addbook",
        { 
            nav,
            title:'Add Book'
    
        });
    });
    adminRouter.post('/addbook',upload.single('image'),(req,res)=>{
        var item={
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image:  req.body.image,
                
            }

        var book = bookData(item);
        book
        .save()
        res.redirect('/books')
     
});
adminRouter.post('/addauthor',(req,res)=>{
    var item={
        name: req.body.name,
        born: req.body.born,
        image: req.body.image,
    }

    var author = authorData(item);
    author.save()
    res.redirect('/authors')
 
});
    

return adminRouter;

}

module.exports=router;