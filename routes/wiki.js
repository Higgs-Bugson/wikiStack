const express = require("express");
const router = express.Router();

module.exports = router;

router.get('/', function(req, res, next) {
    res.send("HOLLA");
});

router.get("/", function(req, res, next){
    res.redirect("/wiki");
});

router.post('/', function(req, res, next){
    console.log("OUR REQ BODY", req.body)

    // Page.build({
    //     title: req.body.title
    // })
    // .save()
    // .then(newPage => res.json({newPage}))
    // .catch(err => console.log("err", err))
    res.json({'hello' : "world"})
});

router.get("/add", function (req, res, next){
    // res.send("This is what you get...")
    res.render("addpage")
    //res.render takes whateveer data we get and interpolates it
    //into the template we want it to be
    //and then it creates an actual page out of it and sends it back
    //res.render sends a response and it is an html file
});
