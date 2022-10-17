const mongoose = require('mongoose');
const uploadSchema = new mongoose.Schema({
    imageUrl: String,
    author: String,
    location: String,
    description: String,
    likes:Number,
    date:String
},{timestamps:true})
mongoose.model('Upload', uploadSchema)