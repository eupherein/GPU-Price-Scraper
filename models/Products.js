var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var Product = new Schema({
    author    : ObjectId,
    title     : String,
    body      : String,
    price      : Price
});

module.exports = Product;