"use strict";
class Account {
	constructor(acc_id, username, firstname, lastname, password, phonenumber, email, address, gender, profile_pic) {
		this.acc_id = acc_id;
		this.username = username;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.phonenumber = phonenumber;
		this.email = email;
		this.address = address;
		this.gender = gender;
		this.profile_pic = profile_pic;
	}
	
	getacc_id() 
	{
    	return this.acc_id;
	}
	getusername() 
	{
   		return this.username;
	}
	getfirstname() 
	{
    	return this.firstname;
	}
	getlastname() 
	{
    	return this.lastname;
	}
	getpassword() 
	{
    	return this.password;
	}
	getphonenumber() 
	{
    	return this.phonenumber;
	}
	getemail() 
	{
    	return this.email;
	}
	getaddress() 
	{
    	return this.address;
	}
	getgender() 
	{
    	return this.gender;
	}
	getprofile_pic() 
	{
    	return this.profile_pic;
	}
	
	setusername(username) {
		this.username = username;
	}
	setfirstname(firstname) {
		this.firstname = firstname;
	}
	setlastname(lastname) {
		this.lastname = lastname;
	}
	setpassword(password) {
		this.password = password;
	}
	setphonenumber(phonenumber) {
		this.phonenumber = phonenumber;
	}
	setemail(email) {
		this.email = email;
	}
	setaddress(address) {
		this.address = address;
	}
	setgender(gender) {
		this.gender = gender;
	}
	setprofile_pic(profile_pic) {
		this.profile_pic = profile_pic;
	}
}
module.exports = Account;

