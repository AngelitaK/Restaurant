"use strict";
class Review {
	constructor(rev_id, rev_stars, rev_title, rev_comments, reviewdate, res_rev_id, acc_rev_id) {
		this.rev_id = rev_id;
		this.rev_stars = rev_stars;
		this.rev_title = rev_title;
		this.rev_comments = rev_comments;
		this. reviewdate =  reviewdate;
		this.res_rev_id = res_rev_id;
		this.acc_rev_id = acc_rev_id;
	}
	
	getrev_id() 
	{
    	return this.rev_id;
	}
	getrev_stars() 
	{
   		return this.rev_stars;
	}
	getrev_title() 
	{
    	return this.rev_title;
	}
	getrev_comments() 
	{
    	return this.rev_comments;
	}
	getreviewdate() 
	{
    	return this.reviewdate;
	}
	getres_rev_id() 
	{
    	return this.res_rev_id;
	}
	getacc_rev_id() 
	{
    	return this.acc_rev_id;
	}

	setrev_stars(rev_stars) {
		this.rev_stars = rev_stars;
	}
	setrev_title(rev_title) {
		this.rev_title = rev_title;
	}
	setrev_comments(rev_comments) {
		this.rev_comments = rev_comments;
	}
	setreviewdate(reviewdate) {
		this.reviewdate = reviewdate;
	}
	setres_rev_id(res_rev_id) {
		this.res_rev_id = res_rev_id;
	}
	setacc_rev_id(acc_rev_id) {
		this.acc_rev_id = acc_rev_id;
	}
}

module.exports = Review;

