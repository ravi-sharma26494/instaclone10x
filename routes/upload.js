const express  =require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Upload = mongoose.model('Upload');
var moment = require('moment');


router.post('/upload', async (req,res)=>{
    try {
        const date = moment().format('DD MMM YYYY')
        const likes = Math.floor(Math.random() * 101);
        const {imageUrl, author, location, description} = req.body
        const postData = new Upload({
            imageUrl,
            author,
            location,
            description,
            likes:likes,
            date:date

        }) ;
        await postData.save();
        res.json(postData);
    } catch (error) {
        console.log('Something went Wrong', error)
    }
});

router.get('/allpost', (req,res)=>{
    Upload.find().sort('-createdAt')
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
})
module.exports = router;