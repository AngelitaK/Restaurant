"use strict"
var db = require('../db-connection');
const Restaurant = require ('../models/Restaurant')

class RestaurantDB{
    getAllRestaurant(request, respond){
        var sql = "SELECT * FROM restaurant.restaurant";
        db.query(sql,function(error,result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    addRestaurant(request, respond){
        var now = new Restaurant();
        var restaurantObject = new Restaurant(null, request.body.restname, request.body.address,request.body.ratings,request.body.open_hours,
            request.body.phone_number,request.body.hyperlink, request.body.res_photos, request.body.res_menu, request.body.description,request.body.thumb,
            request.body.establishment_type, request.body.cuisine_type, request.body.pricerange,request.body.dietary, now.toString());
        
            var sql = "INSERT INTO restaurant.restaurant (restname, address, ratings, open_hours, phone_number, hyperlink, res_photos, res_menu, description, thumb, establishment_type, cuisine_type, pricerange, dietary) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

        var values = [restaurantObject.getrestname(), restaurantObject.getaddress(), restaurantObject.getratings(), restaurantObject.getopen_hours(),
            restaurantObject.getphone_number(), restaurantObject.gethyperlink(), restaurantObject.getres_photos(), restaurantObject.getres_menu(), restaurantObject.getdescription(),
            restaurantObject.getthumb(), restaurantObject.getestablishment_type(), restaurantObject.getcuisine_type(), restaurantObject.getpricerange(), restaurantObject.getdietary()];
        
        db.query(sql, values, function (error, result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    updateRestaurant(request, respond){
            
        var restaurantObject = new Restaurant(request.params.res_id, request.body.restname, request.body.address, request.body.ratings, request.body.open_hours,
            request.body.phone_number, request.body.hyperlink, request.body.res_photos, request.body.res_menu, request.body.description, request.body.thumb,
            request.body.establishment_type, request.body.cuisine_type, request.body.pricerange, request.body.dietary);
    
        var sql = "UPDATE restaurant.restaurant SET restname = ?, address = ?, ratings=?, open_hours = ?,phone_number = ?,hyperlink = ?,res_photos = ?,res_menu = ?,description = ?,thumb = ?,establishment_type = ?,cuisine_type = ?,pricerange = ?, dietary=? WHERE res_id = ?";
        var values = [restaurantObject.getrestname(), restaurantObject.getaddress(), restaurantObject.getratings(),
            restaurantObject.getopen_hours(), restaurantObject.getphone_number(), restaurantObject.gethyperlink(), restaurantObject.getres_photos(),
            restaurantObject.getres_menu(), restaurantObject.getdescription(),restaurantObject.getthumb(),restaurantObject.getestablishment_type(),
            restaurantObject.getcuisine_type(), restaurantObject.getpricerange(),restaurantObject.getdietary(),restaurantObject.getres_id()];
        
            db.query(sql, values, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
              });
        }

        deleteRestaurant(request, respond){
            var restaurantID = request.params.res_id;
            var sql = "DELETE FROM restaurant.restaurant WHERE res_id = ?";
            db.query(sql, restaurantID, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
                });
        }

        searchRestaurant(request, respond){
            var term = request.params.term; 
            var restaurantObject = new Restaurant(request.params.res_id, request.body.restname, request.body.address, request.body.ratings, request.body.open_hours,
                request.body.phone_number, request.body.hyperlink, request.body.res_photos, request.body.res_menu, request.body.description, request.body.thumb,
                request.body.establishment_type, request.body.cuisine_type, request.body.pricerange, request.body.dietary);

            var sql='SELECT restname, ratings, address FROM restaurant.restaurant WHERE restname LIKE "%' + term + '%"';
            var values = [restaurantObject.getrestname()];
            db.query(sql, values, function (error, result) {
                    if(error){
                        throw error;
                    }
                    else{
                        respond.json(result);
                    }
                  });
            }

        searchRestaurantCuisine(request, respond){
            var term = request.params.term; 
            var restaurantObject = new Restaurant(request.params.res_id, request.body.restname, request.body.address, request.body.ratings, request.body.open_hours,
                request.body.phone_number, request.body.hyperlink, request.body.res_photos, request.body.res_menu, request.body.description, request.body.thumb,
                request.body.establishment_type, request.body.cuisine_type, request.body.pricerange, request.body.dietary);
    
            var sql='SELECT restname, ratings, address FROM restaurant.restaurant WHERE cuisine_type LIKE "%' + term + '%"';
            var values = [restaurantObject.getrestname()];
            db.query(sql, values, function (error, result) {
                    if(error){
                        throw error;
                    }
                    else{
                        respond.json(result);
                    }
                    });
            }

        searchRestaurantEstablishment(request, respond){
            var term = request.params.term; 
            var restaurantObject = new Restaurant(request.params.res_id, request.body.restname, request.body.address, request.body.ratings, request.body.open_hours,
                request.body.phone_number, request.body.hyperlink, request.body.res_photos, request.body.res_menu, request.body.description, request.body.thumb,
                request.body.establishment_type, request.body.cuisine_type, request.body.pricerange, request.body.dietary);
        
            var sql='SELECT restname, ratings, address FROM restaurant.restaurant WHERE establishment_type LIKE "%' + term + '%"';
            var values = [restaurantObject.getrestname()];
            db.query(sql, values, function (error, result) {
                    if(error){
                        throw error;
                    }
                    else{
                        respond.json(result);
                    }
                    });
            }

        searchRestaurantPricerange(request, respond){
            var term = request.params.term; 
            var restaurantObject = new Restaurant(request.params.res_id, request.body.restname, request.body.address, request.body.ratings, request.body.open_hours,
                request.body.phone_number, request.body.hyperlink, request.body.res_photos, request.body.res_menu, request.body.description, request.body.thumb,
                request.body.establishment_type, request.body.cuisine_type, request.body.pricerange, request.body.dietary);
            
            var sql='SELECT restname, ratings, address FROM restaurant.restaurant WHERE pricerange LIKE "%' + term + '%"';
            var values = [restaurantObject.getrestname()];
            db.query(sql, values, function (error, result) {
                    if(error){
                        throw error;
                    }
                    else{
                        respond.json(result);
                    }
                    });
            }

        searchRestaurantDietary(request, respond){
            var term = request.params.term; 
            var restaurantObject = new Restaurant(request.params.res_id, request.body.restname, request.body.address, request.body.ratings, request.body.open_hours,
                request.body.phone_number, request.body.hyperlink, request.body.res_photos, request.body.res_menu, request.body.description, request.body.thumb,
                request.body.establishment_type, request.body.cuisine_type, request.body.pricerange, request.body.dietary);
            
            var sql='SELECT restname, ratings, address FROM restaurant.restaurant WHERE dietary LIKE "%' + term + '%"';
            var values = [restaurantObject.getrestname()];
            db.query(sql, values, function (error, result) {
                    if(error){
                        throw error;
                    }
                    else{
                        respond.json(result);
                    }
                    });
            }
            
            getAllExpensive(request, respond){
                var sql = "SELECT pricerange, restname, cuisine_type, dietary FROM restaurant where pricerange='Expensive'";
                db.query(sql,function(error,result){
                    if(error){
                        throw error;
                    }
                    else{
                        respond.json(result);
                    }
                });
            }
}
module.exports = RestaurantDB;