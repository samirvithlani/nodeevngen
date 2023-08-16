const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    name: String,
    age: Number,
    phone: String,
    email: String,
    password: String,
    status: Boolean,
    
})
module.exports = mongoose.model('student', studentSchema);