const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    text: {
        type: String,
        required:true
    }
})
module.exports = User = mongoose.model('User', UserSchema);