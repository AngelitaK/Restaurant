"use strict"
var db = require('../db-connection');
const Account = require ('../models/Account')

class AccountDB{

    getLoginCredentials(request, respond){
        var userid = request.body.username;
        var password = request.body.password;
        var msg = "";

        var sql = "SELECT password FROM restaurant.Account WHERE username = ?";

        function prepareMessage(msg){
            var obj = {"message": msg};
            return obj;
        }

        db.query(sql, [userid], function (error, result) {
            if(error){
                throw error;
            }
            else{
                if(result.length > 0){
                    if(password == result[0].password){
                        msg = "SUCCESS!";
                        console.log(msg);
                    }
                    else{
                        msg = "INCORRECT PASSWORD! You sure you remembered the correct password?";
                        console.log(msg);
                    }
                }
                else{
                    msg = "USER NOT FOUND! Did you even create an account with us?";
                        console.log(msg);
                }
                respond.json(prepareMessage(msg));
            }
          });
    }

    getAllAccount(request, respond){
        var sql = "SELECT * FROM restaurant.Account";
        db.query(sql,function(error,result){
            if(error){
                throw error;
            }
            else{
                respond.json(result);
            }
        });
    }

    addAccount(request, respond){
        var now = new Date();
        var accountObject = new Account(null, request.body.username, request.body.firstname, request.body.lastname,
            request.body.password, request.body.phonenumber, request.body.email, request.body.address, request.body.gender, request.body.profile_pic, now.toString());
        var sql = "INSERT INTO restaurant.account (username, firstname, lastname, password, phonenumber, email, address, gender, profile_pic) VALUES(?,?,?,?,?,?,?,?,?)";
        
        var values = [accountObject.getusername(), accountObject.getfirstname(), accountObject.getlastname(), accountObject.getpassword(),
            accountObject.getphonenumber(), accountObject.getemail(), accountObject.getaddress(), accountObject.getgender(), accountObject.getprofile_pic()];
       
        db.query(sql, values, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
              });
        }

    updateAccount(request, respond){
        var now = new Date();
                
        var accountObject = new Account(request.params.acc_id, request.body.username, request.body.firstname, request.body.lastname, request.body.password,
            request.body.phonenumber, request.body.email, request.body.address, request.body.gender, request.body.profile_pic, now.toString());
        
        var sql = "UPDATE restaurant.account SET username = ?, firstname = ?, lastname=?, password=?, phonenumber=?, email=?, address=?, gender=?, profile_pic=? WHERE acc_id = ?";
        var values = [accountObject.getusername(), accountObject.getfirstname(), accountObject.getlastname(), accountObject.getpassword(),
            accountObject.getphonenumber(), accountObject.getemail(), accountObject.getaddress(), accountObject.getgender(), accountObject.getprofile_pic(),accountObject.getacc_id()];
            
        db.query(sql, values, function (error, result) {
            if(error){
                throw error;
            }
            else{
                 respond.json(result);
            }
            });
        }

        updateUsername(request, respond){
                
            var accountObject = new Account(request.params.acc_id, request.body.username, request.body.firstname, request.body.lastname, request.body.password,
                request.body.phonenumber, request.body.email, request.body.address, request.body.gender, request.body.profile_pic);
            var sql = "UPDATE restaurant.account SET username = ? WHERE acc_id = 1";
            var values = [accountObject.getusername(), accountObject.getacc_id()];
            db.query(sql, values, function (error, result) {
                    if(error){
                        throw error;
                    }
                    else{
                        respond.json(result);
                    }
                  });
            }

        updatePassword(request, respond){
                
            var accountObject = new Account(request.params.acc_id, request.body.username, request.body.firstname, request.body.lastname, request.body.password,
                 request.body.phonenumber, request.body.email, request.body.address, request.body.gender, request.body.profile_pic);
            
            var sql = "UPDATE restaurant.account SET password = ? WHERE acc_id = 1";
            var values = [accountObject.getpassword(), accountObject.getacc_id()];
            db.query(sql, values, function (error, result) {
                    if(error){
                         throw error;
                    }
                    else{
                        respond.json(result);
                    }
                });
            }

        updatePhoneNumber(request, respond){
                
            var accountObject = new Account(request.params.acc_id, request.body.username, request.body.firstname, request.body.lastname, request.body.password,
                request.body.phonenumber, request.body.email, request.body.address, request.body.gender, request.body.profile_pic);
                
            var sql = "UPDATE restaurant.account SET phonenumber = ? WHERE acc_id = 1";
            var values = [accountObject.getphonenumber(), accountObject.getacc_id()];
            db.query(sql, values, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
            });
        }

        updateEmail(request, respond){
                
            var accountObject = new Account(request.params.acc_id, request.body.username, request.body.firstname, request.body.lastname, request.body.password,
                request.body.phonenumber, request.body.email, request.body.address, request.body.gender, request.body.profile_pic);
                    
            var sql = "UPDATE restaurant.account SET email = ? WHERE acc_id = 1";
            var values = [accountObject.getemail(), accountObject.getacc_id()];
            db.query(sql, values, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
            });
        }

        updateAddress(request, respond){
                
            var accountObject = new Account(request.params.acc_id, request.body.username, request.body.firstname, request.body.lastname, request.body.password,
                request.body.phonenumber, request.body.email, request.body.address, request.body.gender, request.body.profile_pic);
                    
            var sql = "UPDATE restaurant.account SET address = ? WHERE acc_id = 1";
            var values = [accountObject.getaddress(), accountObject.getacc_id()];
            db.query(sql, values, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
            });
        }

        deleteAccount(request, respond){
            var accountID = request.params.acc_id;
            var sql = "DELETE FROM restaurant.account WHERE acc_id = ?";
            db.query(sql, accountID, function (error, result) {
                if(error){
                    throw error;
                }
                else{
                    respond.json(result);
                }
                });
        }
}
module.exports = AccountDB;