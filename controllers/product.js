// Controller for our Products
// ============================
var db = require("../models");

module.exports = {
  // Find all Products, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Product
      .find(req.query)
      .sort({ date: -1 })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  },
  // Delete the specified Product
  delete: function(req, res) {
    db.Product.remove({ _id: req.params.id }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  },
  // Update the specified Product
  update: function(req, res) {
    db.Product.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  }
};
