// Dependencies                    
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var logger = require("morgan");
var axios = require("axios");
var cheerio = require("cheerio");
var parser = require("body-parser");

//set port
var PORT = process.env.PORT || 8080;

//Initiate app
var app = express();

//set public folder to static 
app.use(express.static("public"));

//scraper script 
// var scrape = require("./scripts/scrape.js");


// Require our routes
var routes = require("./routes");
// all requests go through route middleware
app.use(routes);


//connect handlebars 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Products";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

// Set the app to listen on port 3000
app.listen(8080, function() {
  console.log("App running on port 8080!");
});

