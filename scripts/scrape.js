var axios = require("axios");
var cheerio = require("cheerio");

//scrape newegg for nvidia cards 
var scrape = function () {
    return axios.get("https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=1080ti&N=-1&isNodeId=1").then(function (res) {

        //set $ to cheerio shorthand
        var $ = cheerio.load(res.data);

        //make array to store search results
        var gpus = [];

        //sort thru search results
        $("a.item-title").each(function (i, element) {

            var link = $(element).attr("href");
            var title = $(element).text();
            var price = $(element).parent().find("li.price-current").find("strong").text();

            //push gpus to array
            results.push({
                title: title,
                link: link,
                price: price

            });

        });
        return gpus;
    });
};


// //Make a request call to grab the HTML body from the site of your choice
// ("https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=1080ti&N=-1&isNodeId=1", function (error, response, html) {

//     // Load the HTML into cheerio and save it to a variable
//     // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
//     var $ = cheerio.load(html);

//     // An empty array to save the data that we'll scrape
//     var results = [];

//     // Select each element in the HTML body from which you want information.
//     // NOTE: Cheerio selectors function similarly to jQuery's selectors,
//     // but be sure to visit the package's npm page to see how it works
//     $("a.item-title").each(function (i, element) {

//         var link = $(element).attr("href");
//         var title = $(element).text();
//         var price = $(element).parent().find("li.price-current").find("strong").text();

//         // Save these results in an object that we'll push into the results array we defined earlier
//         results.push({
//             title: title,
//             link: link,
//             price: price
//         });
//     });

//     // Log the results once you've looped through each of the elements found with cheerio
//     console.log(results);
// });

module.exports = scrape;