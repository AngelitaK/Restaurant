"use strict"
var db = require('../db-connection');
const Review = require('../models/Review');

class ReviewDB{
    getAllReview(request, respond){
        var sql = "SELECT * FROM restaurant.Review";
        db.query(sql,function(error,result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    addReview(request, respond){
        var now = new Date();
        var reviewObject = new Review(null, request.body.rev_stars, request.body.rev_title, request.body.rev_comments, now.toString(),
            request.body.res_rev_id, request.body.acc_rev_id);
        var sql = "INSERT INTO restaurant.review (rev_stars, rev_title, rev_comments, reviewdate, res_rev_id, acc_rev_id) VALUES(?,?,?,?,?,?)";
        
        var values = [reviewObject.getrev_stars(), reviewObject.getrev_title(), reviewObject.getrev_comments(), reviewObject.getreviewdate(), reviewObject.getres_rev_id(), reviewObject.getacc_rev_id()];
       
        db.query(sql, values, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
              });
        }


        updateReview(request, respond){
            var now = new Date();
                
            var reviewObject = new Review(request.params.rev_id, request.body.rev_stars, request.body.rev_title, request.body.rev_comments, request.body.reviewdate,
                request.body.res_rev_id, request.body.acc_rev_id, now.toString());
        
            var sql = "UPDATE restaurant.review SET rev_stars = ?, rev_title = ?, rev_comments=?, reviewdate=?, res_rev_id=?, acc_rev_id=? WHERE rev_id = ?";
            var values = [reviewObject.getrev_stars(), reviewObject.getrev_title(), reviewObject.getrev_comments(), reviewObject.getreviewdate(),
                reviewObject.getres_rev_id(), reviewObject.getacc_rev_id(),reviewObject.getrev_id()];
           
            db.query(sql, values, function (error, result) {
                    if(error){
                        throw error;
                    }
                    else{
                        respond.json(result);
                    }
                  });
            }
        

            deleteReview(request, respond){
                var reviewID = request.params.rev_id;
                var sql = "DELETE FROM restaurant.review WHERE rev_id = ?";
                db.query(sql, reviewID, function (error, result) {
                    if(error){
                        throw error;
                    }
                    else{
                        respond.json(result);
                    }
                  });
            }

            leaveReview(request, respond){
                var now = new Date();
                var reviewObject = new Review(null, request.body.rev_stars, request.body.rev_title, request.body.rev_comments, now.toString(),
                    request.body.res_rev_id, request.body.acc_rev_id);
                var sql = "INSERT INTO restaurant.review (rev_stars, rev_title, rev_comments, reviewdate, res_rev_id, acc_rev_id) VALUES(?,?,?,?,?,?)";
                
                var values = [reviewObject.getrev_stars(), reviewObject.getrev_title(), reviewObject.getrev_comments(), reviewObject.getreviewdate(), reviewObject.getres_rev_id(), reviewObject.getacc_rev_id()];
               
                db.query(sql, values, function (error, result) {
                        if(error){
                            throw error;
                        }
                        else{
                            respond.json(result);
                        }
                      });
                }
}
module.exports = ReviewDB;