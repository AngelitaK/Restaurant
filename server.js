"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const routeAccount = require('./routes/routeAccount');
const routeRestaurant = require('./routes/routeRestaurant');
const routeReview = require('./routes/routeReview');
const routeBooking = require('./routes/routeBooking');

var app = express();
var host = "127.0.0.1";
var port = 8080;
var startPage = "index.html";

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routeAccount.routeAccount(app);
routeRestaurant.routeRestaurant(app);
routeReview.routeReview(app);
routeBooking.routeBooking(app);


function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
