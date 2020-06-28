const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connctDb = async () => {
    try {
        console.log(db);
        await mongoose.connect(db,{ useNewUrlParser: true });
        console.log("connected properly");
    } catch (err) {
        console.log(err.message,"need to work more");
       // process.exit(1);
    }
}

module.exports = connctDb;

