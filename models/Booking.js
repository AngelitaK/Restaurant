"use strict";
class Booking {
	constructor(booking_id, res_booking_id, acc_booking_id, date, time, no_people, comments) {
		this.booking_id = booking_id;
		this.res_booking_id = res_booking_id;
		this.acc_booking_id = acc_booking_id;
		this.date = date;
		this.time = time;
		this.no_people = no_people;
		this.comments = comments;
	}
	
	getbooking_id() 
	{
    	return this.booking_id;
	}
	getres_booking_id() 
	{
   		return this.res_booking_id;
	}
	getacc_booking_id() 
	{
    	return this.acc_booking_id;
	}
	getdate() 
	{
    	return this.date;
	}
	gettime() 
	{
    	return this.time;
	}
	getno_people() 
	{
    	return this.no_people;
	}
	getcomments() 
	{
    	return this.comments;
	}

	setres_booking_id(res_booking_id) {
		this.res_booking_id = res_booking_id;
	}
	setacc_booking_id(acc_booking_id) {
		this.acc_booking_id = acc_booking_id;
	}
	setrev_stars(rev_stars) {
		this.rev_stars = rev_stars;
	}
	setrdate(date) {
		this.date = date;
	}
	settime(time) {
		this.time = time;
	}
	setcomments(comments) {
		this.comments = comments;
	}
}
module.exports =  Booking;

