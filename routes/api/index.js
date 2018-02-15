var router = require("express").Router();
var fetchRoutes = require("./fetch");
var noteRoutes = require("./notes");
var productRoutes = require("./products");

router.use("/fetch", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/products", productRoutes);

module.exports = router;
