"use strict";
class Restaurant {
	constructor(res_id, restname, address, ratings, open_hours, phone_number, hyperlink, res_photos, res_menu, description, thumb, establishment_type, cuisine_type, pricerange, dietary) {
		this.res_id = res_id;
		this.restname = restname;
		this.address = address;
		this.ratings = ratings;
		this.open_hours = open_hours;
		this.phone_number = phone_number;
		this. hyperlink =  hyperlink;
		this.res_photos = res_photos;
		this.res_menu = res_menu;
        this.description = description;
        this.thumb = thumb;
		this.establishment_type = establishment_type;
		this.cuisine_type = cuisine_type;
		this.pricerange =  pricerange;
		this.dietary = dietary;
	}
	
	getres_id() 
	{
    	return this.res_id;
	}
	getrestname() 
	{
   		return this.restname;
	}
	getaddress() 
	{
    	return this.address;
	}
	getratings() 
	{
    	return this.ratings;
	}
	getopen_hours() 
	{
    	return this.open_hours;
	}
	getphone_number() 
	{
    	return this.phone_number;
	}
	gethyperlink() 
	{
    	return this.hyperlink;
	}
	getres_photos() 
	{
    	return this.res_photos;
	}
	getres_menu() 
	{
    	return this.res_menu;
	}
	getdescription() 
	{
    	return this.description;
    }
    getthumb() 
	{
    	return this.thumb;
    }
    getestablishment_type() 
	{
    	return this.establishment_type;
	}
	getcuisine_type() 
	{
    	return this.cuisine_type;
	}
	getpricerange() 
	{
    	return this.pricerange;
	}
	getdietary() 
	{
    	return this.dietary;
	}
	
	setrestname(restname) {
		this.restname = restname;
	}
	setaddress(address) {
		this.address = address;
	}
	setratings(ratings) {
		this.ratings = ratings;
	}
	setopen_hours(open_hours) {
		this.open_hours = open_hours;
	}
	setphone_number(phone_number) {
		this.phone_number = phone_number;
	}
	sethyperlink(hyperlink) {
		this.hyperlink = hyperlink;
	}
	setres_photos(res_photos) {
		this.res_photos = res_photos;
	}
	setres_menu(res_menu) {
		this.res_menu = res_menu;
	}
	setdescription(description) {
		this.description = description;
	}
	setthumb(thumb) {
		this.thumb = thumb;
	}
	setestablishment_type(establishment_type) {
		this.establishment_type = establishment_type;
	}
	setcuisine_type(cuisine_type) {
		this.cuisine_type = cuisine_type;
	}
	setpricerange(pricerange) {
		this.pricerange = pricerange;
	}
	setdietary(dietary) {
		this.dietary = dietary;
	}
}
module.exports = Restaurant;

