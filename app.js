var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
var fs = require("fs");
const https = require("https");
const app = express();

////App Config
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use("/javascripts", express.static("./Scripts"));
app.use(bodyParser.json()),
app.use(bodyParser.urlencoded({ extended: true }));

////routing
//web page
/*var userInViews = require("./lib/middleware/userInViews");
var authRouter = require("./routes/auth");
var indexRouter = require("./routes/index");
var mainRouter = require("./routes/main");
var vokabelheftRouter = require("./routes/vokabelheft");*/
var indexRouter = require("./routers/index");

app.use('/', indexRouter);

////server
https.createServer({
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert")
}, app)
.listen(3000, function()    {
    console.log("Server listening on port 3000")
});
/*var server = app.listen(3000, function()  {
    var host = server.address().adress;
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
});*/
