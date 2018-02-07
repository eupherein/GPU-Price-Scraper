// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var request = require("request");
var express = require('express')
var router = express.Router();
var mongoose = require("mongoose");


// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "Newegg";
var collections = ["products"];

// Use mongoose to hook the database to the db variable
// var db = mongoose(databaseUrl, collections);

//=======================================================|
//=     Load main page      =============================|
//=======================================================|
router.get('/', function (req, res) {
    res.render('index.ejs'); // load the index.ejs file
});

//require models
// var db = require("./models");

// This makes sure that any errors are logged if mongodb runs into an issue
// db.on("error", function(error) {
//  console.log("Database Error:", error);
// });

// Initialize Express
// var app = express();
// TODO: Implement the remaining two routes

//-------
//router.use(express.static(__dirname + '/public'));
router.use('/', router);



// 2: All: Send JSON response with all animals
router.get("/all", function (req, res) {
    // Query: In our database, go to the animals collection, then "find" everything
    db.animals.find({}, function (err, data) {
        // Log any errors if the server encounters one
        if (err) {
            console.log(err);
        } else {
            // Otherwise, send the result of this query to the browser
            res.json(data);
        }
    });
});

module.exports = router;