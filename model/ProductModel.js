const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    }
})
module.exports = mongoose.model('Product', ProductSchema);