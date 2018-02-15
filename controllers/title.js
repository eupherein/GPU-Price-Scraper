// Controller for our Titles
// ============================
var db = require("../models");

module.exports = {
  // Find all Titles, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Title
      .find(req.query)
      .sort({ date: -1 })
      .then(function(dbTitle) {
        res.json(dbTitle);
      });
  },
  // Delete the specified Title
  delete: function(req, res) {
    db.Title.remove({ _id: req.params.id }).then(function(dbTitle) {
      res.json(dbTitle);
    });
  },
  // Update the specified Title
  update: function(req, res) {
    db.Title.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbTitle) {
      res.json(dbTitle);
    });
  }
};
