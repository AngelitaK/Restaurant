"use strict"

const accountdb = require('../models/AccountDB');

var accountDBObject = new accountdb();

function routeAccount(app){
    app.route('/login')
        .post(accountDBObject.getLoginCredentials);
    app.route('/register')
        .post(accountDBObject.addAccount)
    app.route('/account')
        .get(accountDBObject.getAllAccount);
    app.route('/account/:acc_id')
        .delete(accountDBObject.deleteAccount)
        .put(accountDBObject.updateAccount);
    app.route('/updateUsername')
        .put(accountDBObject.updateUsername);
    app.route('/updatePassword')
        .put(accountDBObject.updatePassword);
    app.route('/updatePhoneNumber')
        .put(accountDBObject.updatePhoneNumber);
    app.route('/updateEmail')
        .put(accountDBObject.updateEmail);
    app.route('/updateAddress')
        .put(accountDBObject.updateAddress);
    
}
module.exports = {routeAccount};