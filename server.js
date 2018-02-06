// See near the bottom of this file for your TODO assignments.
// Good luck!

// Dependencies
var express = require("express");
var mongoose = require("mongoose");
var router = require("./controllers/controller.js");
var logger = require("morgan");
var axios = require("axios");
var cheerio = require("cheerio");
var parser = require("body-parser");

// Initialize Express
var app = express();

//configure ejs
app.set('view engine', 'ejs');

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "Newegg";
var collections = ["products"];



// Use mongoose to hook the database to the db variable
 var db = mongoose(databaseUrl, collections);



// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
 console.log("Database Error:", error);
});

// TODO: Implement the remaining two routes

app.use('/', router);

// 3: Name: Send JSON response sorted by name in ascending order, e.g. GET "/name"

// 4: Weight: Send JSON response sorted by weight in descending order, , e.g. GET "/weight"

// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
