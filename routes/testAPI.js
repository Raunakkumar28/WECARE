var express = require("express");
var router = express.Router();

router.post("/", async function (req, res, next) {
    res.send("API is working properly");
    console.log(req.body)

});

module.exports = router;