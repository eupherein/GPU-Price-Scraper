var axios = require("axios");
var cheerio = require("cheerio");

//=================================================|
//scrape newegg for nvidia cards                   |
//=================================================|

//scrape for Nvidia GTX 
var scrape1080ti = function () {
    return axios.get("https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=1080ti&ignorear=0&N=-1&isNodeId=1").then(function (res) {

        //set $ to cheerio shorthand
        var $ = cheerio.load(res.data);

        //make array to store search results
        var gpus = [];

        //sort thru search results
        $("a.item-title").each(function (i, element) {

            var title = $(element).text();
            var link = $(element).attr("href");
            var price = $(element).parent().find("li.price-current").find("strong").text();

            //push gpus to array
            gpus.push({
                title: title,
                link: link,
                price: price

            });
            console.log(gpus);
        });
        return gpus;
    });
};
scrape1080ti();

//================================================================================|
module.exports = (scrape1080ti);


// //=================================================|
// //scrape for Nvidia GTX 1080                       |
// //=================================================|
// var scrape1080 = function () {
//     return axios.get("https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=1080&ignorear=0&N=-1&isNodeId=1").then(function (res) {

//         //set $ to cheerio shorthand
//         var $ = cheerio.load(res.data);

//         //make array to store search results
//         var gpus = [];

//         //sort thru search results
//         $("a.item-title").each(function (i, element) {

//             var link = $(element).attr("href");
//             var title = $(element).text();
//             var price = $(element).parent().find("li.price-current").find("strong").text();

//             gpus.push({
//                 title: title,
//                 link: link,
//                 price: price

//             });
//             console.log(gpus);
//         });
//         return gpus;
//     });
// };
// scrape1080();

// //=================================================|
// //scrape for Nvidia GTX 1070ti                     |
// //=================================================|
// var scrape1070ti = function () {
//     return axios.get("https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=1070ti&ignorear=0&N=-1&isNodeId=1").then(function (res) {

//         //set $ to cheerio shorthand
//         var $ = cheerio.load(res.data);

//         //make array to store search results
//         var gpus = [];

//         //sort thru search results
//         $("a.item-title").each(function (i, element) {

//             var link = $(element).attr("href");
//             var title = $(element).text();
//             var price = $(element).parent().find("li.price-current").find("strong").text();

//             gpus.push({
//                 title: title,
//                 link: link,
//                 price: price

//             });
//             console.log(gpus);
//         });
//         return gpus;
//     });
// };
// scrape1070ti();

// //=================================================|
// //scrape for Nvidia GTX 1070                       |
// //=================================================|
// var scrape1070 = function () {
//     return axios.get("https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=1070&ignorear=0&N=-1&isNodeId=1").then(function (res) {

//         //set $ to cheerio shorthand
//         var $ = cheerio.load(res.data);

//         //make array to store search results
//         var gpus = [];

//         //sort thru search results
//         $("a.item-title").each(function (i, element) {

//             var link = $(element).attr("href");
//             var title = $(element).text();
//             var price = $(element).parent().find("li.price-current").find("strong").text();

//             gpus.push({
//                 title: title,
//                 link: link,
//                 price: price

//             });
//             console.log(gpus);
//         });
//         return gpus;
//     });
// };
// scrape1070();

// //=================================================|
// //scrape for Nvidia GTX 1060                       |
// //=================================================|
// var scrape1060 = function () {
//     return axios.get("https://www.newegg.com/Product/ProductList.aspx?Submit=ENE&DEPA=0&Order=BESTMATCH&Description=1060&ignorear=0&N=-1&isNodeId=1").then(function (res) {

//         //set $ to cheerio shorthand
//         var $ = cheerio.load(res.data);

//         //make array to store search results
//         var gpus = [];

//         //sort thru search results
//         $("a.item-title").each(function (i, element) {

//             var link = $(element).attr("href");
//             var title = $(element).text();
//             var price = $(element).parent().find("li.price-current").find("strong").text();

//             gpus.push({
//                 title: title,
//                 link: link,
//                 price: price

//             });
//             console.log(gpus);
//         });
//         return gpus;
//     });
// };
// scrape1060();