// Controller for our scraper
// ============================
var db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeGPUs: function(req, res) {
    // scrape the NYT
    return scrape()
      .then(function(gpus) {
        // then insert gpus into the db
        return db.Title.create(gpus);
      })
      .then(function(dbTitle) {
        if (dbTitle.length === 0) {
          res.json({
            message: "No new gpus today. Check back tomorrow!"
          });
        }
        else {
          // Otherwise send back a count of how many new gpus we got
          res.json({
            message: "Added " + dbTitle.length + " new gpus!"
          });
        }
      })
      .catch(function(err) {
        // This query won't insert gpus with duplicate Titles, but it will error after inserting the others
        res.json({
          message: "Scrape complete!!"
        });
      });
  }
};
