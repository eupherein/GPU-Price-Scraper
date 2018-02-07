// Dependencies                    
var express = require("express");
var mongoose = require("mongoose");
var router = require("./controllers/controller.js");
var logger = require("morgan");
var axios = require("axios");
var cheerio = require("cheerio");
var parser = require("body-parser");
var app = express();

//scraper script 
var scrape = require("./scripts/scrape.js");

//configure ejs
app.set('view engine', 'ejs');

//test to see if working 
app.get("/", function(req, res) {
    res.send("Hello world");
  });

//mongoose.connect("mongodb://localhost/gpuscraper");

// Set the app to listen on port 3000
app.listen(8080, function() {
  console.log("App running on port 8080!");
});
