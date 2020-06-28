const mongoose = require('mongoose');

const testAPISchema = new mongoose.Schema({
    text: {
        type: String,
        required:true
    }
})
module.exports = testAPI = mongoose.model('testAPI', testAPISchema);