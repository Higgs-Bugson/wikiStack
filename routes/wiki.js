const express = require("express");
const router = express.Router();
const models=require('../models');
const Page= models.Page;
const User=models.User;
module.exports = router;

router.get('/', function(req, res, next) {
    res.send("HOLLA");
});

router.get("/", function(req, res, next){
    res.redirect("/wiki");
});

router.post('/', function(req, res, next){
    console.log("OUR REQ BODY", req.body)
const page=Page.build({
author:req.body.author,
email:req.body.email,
title:req.body.title,
content:req.body.content,
status:req.body.status

})
page.save();
res.redirect('/');
//     })
//  .save()

//     .then(newPage => res.json({newPage}))
//     .catch(err => console.log("err", err))
    //res.json({'hello' : "world"})
});

router.get("/add", function (req, res, next){
    // res.send("This is what you get...")
    res.render("addpage")
    //res.render takes whateveer data we get and interpolates it
    //into the template we want it to be
    //and then it creates an actual page out of it and sends it back
    //res.render sends a response and it is an html file
});

function turl(title)
{
    // if space will replace with underscore
    // if special char then splice them 
    //
}