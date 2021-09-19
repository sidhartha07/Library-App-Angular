const express= require("express");
const Authordata = require("../model/authorData");
const authorsRouter=express.Router();
const authorData=require('../model/authorData')
const cors = require('cors');
const jwt = require('jsonwebtoken');

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send("Unauthorized request");
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token == 'null'){
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretKey');
    if(payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

function router(nav){
authorsRouter.use(express.urlencoded({extended:true}))
authorsRouter.use(express.json())
authorsRouter.options('/', cors())
authorsRouter.options('/:id', cors())
authorsRouter.options('/add', cors())
authorsRouter.options('/update', cors())
authorsRouter.options('/remove/:id', cors())

authorsRouter.get('/',cors(),(req,res)=>{
    Authordata.find()
    .then((authors)=>{
        res.send(authors);
    })
});

authorsRouter.get('/:id',cors(),(req,res)=>{
    const id = req.params.id;

    authorData.findOne({_id: id})
    .then((author)=>{
        res.send(author);
    })
});

authorsRouter.post('/add',cors(),function(req,res){
   
    console.log(req.body);
   
    var book = { 
      name:req.body.name,
      born:req.body.born,
      image:req.body.image
   
   }       
   var author = new authorData(author);
   author.save();
});

authorsRouter.put('/update',cors(),verifyToken,(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    name=req.body.name,
    born=req.body.born,
    image=req.body.image
   authorData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "name":name,
                                "born":born,
                                "image":image
                            }})
   .then(function(){
       res.send();
   })
 })

 authorsRouter.delete('/remove/:id',cors(),verifyToken,(req,res)=>{
 
    id = req.params.id;
    authorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })

return authorsRouter;

}

module.exports=router;