var mongoose = require("mongoose");

// require mongoose 
var Schema = mongoose.Schema;


var productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: {
            index: {
                unique: true
            }
        }
    },
    // price, a string, must be entered
    price: {
        type: String,
        required: true
    },
    // url, a string, must be entered
    url: {
        type: String,
        required: true
    }
});

// create product model using productSchema
var Product = mongoose.model('product', productSchema);

module.exports = Product;