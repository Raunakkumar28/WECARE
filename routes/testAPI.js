var express = require("express");
var router = express.Router();
const connectdb=require('./../config/db');
const connectDb = require('./../config/db');

router.get("/", function (req, res, next) {
    connectDb();
    console.log(req.body);
    res.send("API is working properly");
});

module.exports = router;