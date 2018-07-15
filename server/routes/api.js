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

router.get('/articles/:id', (req,res)=> {

    console.log('Finding a single article');

    article.findById(req.params.id)
       .exec((err,article)=>{
           if(err){
               console.log('Error getting the article')
           }
           else{
               res.json(article);
           }
       });
});

router.post('/create', (req,res) => {
 
    console.log('Posting a single article');
    
    var newArticle= new article();
    newArticle.tile= req.body.title;
    newArticle.content= req.body.content;
    newArticle.save( (err, article) => {
          if(err){
              console.log('Error posting an record');
          }
          else{
              res.json(article);
          }
    });
});
module.exports = router;