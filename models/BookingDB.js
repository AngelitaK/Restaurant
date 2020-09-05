"use strict"
var db = require('../db-connection');
const Booking = require('../models/Booking');

class BookingDB{
    getAllBooking(request, respond){
        var sql = "SELECT * FROM restaurant.Booking";
        db.query(sql,function(error,result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    addBooking(request, respond){
        var now = new Date();
        var bookingObject = new Booking(null, request.body.res_booking_id, request.body.acc_booking_id, request.body.date, request.body.time,
            request.body.no_people, request.body.comments, now.toString());
        var sql = "INSERT INTO restaurant.booking (res_booking_id, acc_booking_id, date, time, no_people, comments) VALUES(?,?,?,?,?,?)";
        
        var values = [bookingObject.getres_booking_id(), bookingObject.getacc_booking_id(), bookingObject.getdate(), bookingObject.gettime(),
            bookingObject.getno_people(), bookingObject.getcomments()];
       
        db.query(sql, values, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
              });
        }

        updateBooking(request, respond){
            var now = new Date();
                
            var bookingObject = new Booking(request.params.booking_id, request.body.res_booking_id, request.body.acc_booking_id, request.body.date, request.body.time,
                request.body.no_people, request.body.comments, now.toString());
        
            var sql = "UPDATE restaurant.booking SET res_booking_id = ?, acc_booking_id = ?, date=?, time=?, no_people=?, comments=? WHERE booking_id = ?";
            var values = [bookingObject.getres_booking_id(), bookingObject.getacc_booking_id(), bookingObject.getdate(), bookingObject.gettime(),
                bookingObject.getno_people(), bookingObject.getcomments() ,bookingObject.getbooking_id()];
           
            db.query(sql, values, function (error, result) {
                    if(error){
                        throw error;
                    }
                    else{
                        respond.json(result);
                    }
                  });
            }
    
    deleteBooking(request, respond){
        var bookingID = request.params.booking_id;
        var sql = "DELETE FROM restaurant.booking WHERE booking_id = ?";
        db.query(sql, bookingID, function (error, result) {
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
            });
    }
}
module.exports = BookingDB;