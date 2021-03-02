var express = require('express');
var router = express.Router();

router.get("/index", function(req, res)    {
    console.log("getIndex");
});

router.post("/index", function(req, res)    {
    const data = req.body;
    console.log(data);
    res.sendStatus(200);
});

module.exports = router;
