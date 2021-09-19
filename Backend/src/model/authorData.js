const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://userone:userone@ictakfiles.daga3.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/library');

const Schema=mongoose.Schema;

const AuthorSchema=new Schema({
    name: String,
    born: String,
    image: String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;
