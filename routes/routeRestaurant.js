"use strict"

const restaurantdb = require('../models/RestaurantDB');

var restaurantDBObject = new restaurantdb();

function routeRestaurant(app){
    app.route('/restaurant')
        .post(restaurantDBObject.addRestaurant)
        .get(restaurantDBObject.getAllRestaurant);
    app.route('/expensive')
        .get(restaurantDBObject.getAllExpensive);
    app.route('/restaurant/:res_id')
        .delete(restaurantDBObject.deleteRestaurant)
        .put(restaurantDBObject.updateRestaurant);
    app.route('/search/:term')
        .get(restaurantDBObject.searchRestaurant);
    app.route('/searchcuisine/:term')
        .get(restaurantDBObject.searchRestaurantCuisine);
    app.route('/searchestablishment/:term')
        .get(restaurantDBObject.searchRestaurantEstablishment);
    app.route('/searchpricerange/:term')
        .get(restaurantDBObject.searchRestaurantPricerange);
    app.route('/searchdietary/:term')
        .get(restaurantDBObject.searchRestaurantDietary);
}
module.exports = {routeRestaurant};