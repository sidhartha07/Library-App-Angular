const express= require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 5000;
const nav= [
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/addauthor',name:'Add Author'},
    {link:'/admin',name:'Add Book'},
    {link:'/login',name:'Logout'},
    {link:'/signup',name:'Signup'}

];
const signupData=require('./src/model/signupData')
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const cors = require('cors');


// app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())

username='admin';
password='1234';


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

app.get('/',(req,res)=>{
    res.render("index",
    { 
        nav,
        title:'Library'

    });
});


app.post('/login',(req,res)=>{
    let userData = req.body


    signupData.findOne({$and:[{"username":userData.uname},{"password":userData.password}]},
    function(err, user) {


        if (err) {
            
         }
    
        if (user) {
            let payload = {subject: username+password}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
           
        } else {
            res.status(401).send('Invalid Login Details')
            
        }
    }
    )   
      
    });



app.post('/signup',(req,res)=>{
    signupData.findOne({"username":req.body.username},
    function(err, user) {
        if (err) {
            
         }
    
        if (user) {
            res.status(401).send('User Already Exists')
           
        } else {
            var item={
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
            }
        
            var signup = signupData(item);
            signup.save()
            res.status(200).send()
            
        }
    }
    )
    
    
});


app.get('/addauthor', (req,res)=>{
    res.render('addauthor',
     { 
        nav,
        title:'Add Author'
     });
});






app.listen(port,()=>{console.log("Server ready at "+port)});