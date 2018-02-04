// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var request = require("request");

// Make a request call to grab the HTML body from the site of your choice
request("https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=1080ti&N=-1&isNodeId=1", function (error, response, html) {

    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var results = [];

    // Select each element in the HTML body from which you want information.
    // NOTE: Cheerio selectors function similarly to jQuery's selectors,
    // but be sure to visit the package's npm page to see how it works
    $("a.item-title").each(function (i, element) {

        var link = $(element).attr("href");
        var title = $(element).text();
        var price = $(element).parent().find("li.price-current").find("strong").text();

        // Save these results in an object that we'll push into the results array we defined earlier
        results.push({
            title: title,
            link: link,
            price: price
        });
    });

    // Log the results once you've looped through each of the elements found with cheerio
    console.log(results);
});