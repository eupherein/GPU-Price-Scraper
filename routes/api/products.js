var router = require("express").Router();
var productController = require("../../controllers/product");

router.get("/", productController.findAll);
router.delete("/:id", productController.delete);
router.put("/:id", productController.update);

module.exports = router;