"use strict"

const bookingdb = require('../models/BookingDB');

var bookingDBObject = new bookingdb();

function routeBooking(app){
    app.route('/booking')
        .post(bookingDBObject.addBooking)
        .get(bookingDBObject.getAllBooking);
    app.route('/booking/:booking_id')
        .delete(bookingDBObject.deleteBooking)
        .put(bookingDBObject.updateBooking);
}
module.exports = {routeBooking};