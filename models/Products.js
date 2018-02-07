var mongoose = require("mongoose");
var Schema = mongoose.Schema;

    ObjectId = Schema.ObjectId;
 
var productSchema = new Schema({
    gpu    : ObjectId,
    name     : String,
    price      : String,
});

var product = mongoose.model('product', productSchema);

module.exports = product;