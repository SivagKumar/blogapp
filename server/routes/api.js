const express= require('express')
const router= express.Router();
const mongoose= require('mongoose');
const db= "mongodb://blguser:blguser1@ds137611.mlab.com:37611/blgapp";
const article= require('../models/article');

mongoose.Promise = global.Promise;

mongoose.connect(db, (err) => {
    if (err){
        console.log('Error connecting');
    }
});


router.get('/all', (req,res) => {

    article.find({})
    .exec((err,articles) => {
        if(err) console.log('error getting articles');
        else
        {
            console.log(articles);
            res.json(articles);
        }
    });
});


module.exports = router;