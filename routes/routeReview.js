"use strict"

const reviewdb = require('../models/ReviewDB');

var reviewDBObject = new reviewdb();

function routeReview(app){
    app.route('/review')
        .post(reviewDBObject.addReview)
        .get(reviewDBObject.getAllReview);
    app.route('/review/:rev_id')
        .delete(reviewDBObject.deleteReview)
        .put(reviewDBObject.updateReview);
    app.route('/leavereview')
        .post(reviewDBObject.leaveReview);
}
module.exports = {routeReview};