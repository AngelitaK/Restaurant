$(document).ready(function () { 
    var res_id = getParameterByName(res_id);
    getrestaurantData(res_id);
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//This function is to call the restaurants api and get all the restaurants
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getrestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);

    //This function will be called when data returns from the web api
    request.onload = function() {
    //get all the restaurants records into our restaurant array
    restaurant_array = JSON.parse(request.responseText);

    //Reviews
    fetchComments();
    
    //call the function so as to display all restaurants tiles for "Now Showing"
    displayRestaurants(category);
    displayallRestaurants(category);
    };
    //This command starts the calling of the restaurants web api
    request.send();
}

function displayallRestaurants() 
{    
    var table = document.getElementById("allRestaurants");
    var restaurantCount = 0;    
    var message = "";    

    table.innerHTML = "";    
    totalrestaurant = restaurant_array.length;    
    for (var count = 0; count < totalrestaurant; count++) 
    {            
            var res_id = restaurant_array[count].res_id;
            var thumbnail = restaurant_array[count].thumb;            
            var title = restaurant_array[count].restname; 
            var address = restaurant_array[count].address;  
            var hyperlink = restaurant_array[count].hyperlink;     
            var open_hours = restaurant_array[count].open_hours;
            var phone_number = restaurant_array[count].phone_number;
            var ratings = restaurant_array[count].ratings;    
            var cell = '<div class="col-md-4" style="float: none; margin: 10 auto; ">' +                          
                            '<div class="flip-container" >' +              
                                '<div class="flipper">' +
                                    '<div class="front">' + 
                                        '<a id="restaurant" href="#" data-toggle="modal" data-target="#restaurantModal" item=' + count + '>'+
                                            '<img class="img-fluid img-thumbnail" src=' + thumbnail + ' />'+
                                            
                                        '</a>'+
                                    '</div>'+                              
                                    '<div class="back">'+                                   
                                        '<div class="bg-dark mystyle text-center py-3" >'+
                                        '<a id="hyperlink" href="' + hyperlink + '" target="_blank">' + title + '</a><br>' +
                                            '<span id="address">' + address + '</span><br>' +
                                            '<label for="open_hours" id="open_hours">Opening Hours :  </label>' +
                                            '<span id="open_hours">'+ open_hours + '</span><br>' +
                                            '<label for="phone_number" id="phone_number">Contact :   </label>' +
                                            '<span id="phone_number">'+ phone_number + '</span><br>' +
                                            '<label for="ratings" id="ratings">Ratings :   </label>' +
                                            '<span id="ratings">'+ ratings + '</span><br>' +
                                            '<a href="restinfo.html?id=' + res_id + '" type="button" class="btn btn-primary btn-sm" onClick="showRestaurantDetails(this)">Info</a>'+                   
                                            
                                        '</div>'+
                                    '</div>'+
                                '</div>' +
                            '</div>' +
                        '</div>'; 
             table.insertAdjacentHTML('beforeend', cell);       
             restaurantCount++; 
    }
    //RESTAURANT 
    message = restaurantCount + " Restaurants Available";    
    document.getElementById("summary").textContent = message;    
    document.getElementById("parent").textContent = "";
    document.getElementById("restaurantsTable").textContent = "";
}

//This function is to display the restaurants tiles
//that filters based on cuisine_type
function displayRestaurants(category) 
{    
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;    
    var message = "";    

    table.innerHTML = "";    
    totalrestaurant = restaurant_array.length;    
    for (var count = 0; count < totalrestaurant; count++) 
    {            
        if (restaurant_array[count].cuisine_type == category) 
        { 

            var res_id = restaurant_array[count].res_id;
            var thumbnail = restaurant_array[count].thumb;            
            var title = restaurant_array[count].restname; 
            var address = restaurant_array[count].address;
            var hyperlink = restaurant_array[count].hyperlink;  
            var open_hours = restaurant_array[count].open_hours;
            var phone_number = restaurant_array[count].phone_number;        
            var ratings = restaurant_array[count].ratings;
            var cell = '<div class="col-md-4" style="float: none; margin: 10 auto; justify-content: center;">' +                          
                            '<div class="flip-container" >' +              
                                '<div class="flipper">' +
                                    '<div class="front">' + 
                                        '<a id="restaurant" href="#" data-toggle="modal" data-target="#restaurantModal" item=' + count + '>'+
                                            '<img class="img-fluid img-thumbnail" src=' + thumbnail + ' />'+
                                        '</a>'+
                                    '</div>'+                              
                                    '<div class="back">'+                                   
                                        '<div class="bg-dark mystyle text-center py-3" >'+
                                            '<a id="hyperlink" href="' + hyperlink + '" target="_blank">' + title + '</a><br>' +
                                            '<span id="address">' + address + '</span><br>' +
                                            '<label for="open_hours" id="open_hours">Opening Hours :  </label>' +
                                            '<span id="open_hours">'+ open_hours + '</span><br>' +
                                            '<label for="phone_number" id="phone_number">Contact :   </label>' +
                                            '<span id="phone_number">'+ phone_number + '</span><br>' +
                                            '<label for="ratings" id="ratings">Ratings :   </label>' +
                                            '<span id="ratings">'+ ratings + '</span><br>' +
                                            '<a href="restinfo.html?id=' + res_id + '" type="button" class="btn btn-primary btn-sm" onClick="showRestaurantDetails(this)">Info</a>'+                      
                                            
                                        '</div>'+
                                    '</div>'+
                                '</div>' +
                            '</div>' +
                        '</div>'; 
             table.insertAdjacentHTML('beforeend', cell);       
             restaurantCount++; 
        }
        
    }
    //RESTAURANT 
    message = restaurantCount + " Restaurants Available";    
    document.getElementById("summary").textContent = message;    
    document.getElementById("parent").textContent = "";
    document.getElementById("allRestaurants").textContent = "";
}

//This function is to display all Restaurants
function listallRestaurants() {
    displayallRestaurants();
    document.getElementById("Menu").classList.add("active");
}

//This function is to display the "Asian" restaurants
function listAsian() {
    category = "Asian";
    displayRestaurants(category);
    document.getElementById("Asian").classList.add("active");
    document.getElementById("Western").classList.remove("active");
    document.getElementById("Indian").classList.remove("active");
    document.getElementById("Malay").classList.remove("active");
    document.getElementById("Menu").classList.remove("active")
}

//This function is to display the "Western" restaurants
function listWestern() {
    category = "Western";
    displayRestaurants(category);
    document.getElementById("Asian").classList.remove("active");
    document.getElementById("Western").classList.add("active");
    document.getElementById("Indian").classList.remove("active");
    document.getElementById("Malay").classList.remove("active");
    document.getElementById("Menu").classList.remove("active")
}

//This function is to display the "Indian" restaurants
function listIndian() {
    category = "Indian";
    displayRestaurants(category);
    document.getElementById("Asian").classList.remove("active");
    document.getElementById("Western").classList.remove("active");
    document.getElementById("Indian").classList.add("active");
    document.getElementById("Malay").classList.remove("active");
    document.getElementById("Menu").classList.remove("active")
}

//This function is to display the "Malay" restaurants
function listMalay() {
    category = "Malay";
    displayRestaurants(category);
    document.getElementById("Asian").classList.remove("active");
    document.getElementById("Western").classList.remove("active");
    document.getElementById("Indian").classList.remove("active");
    document.getElementById("Malay").classList.add("active");
    document.getElementById("Menu").classList.remove("active")
}

//This function is to display the individual restaurants details
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restname").textContent = restaurant_array[item].restname;
    document.getElementById("address").textContent = restaurant_array[item].address;
    document.getElementById("ratings").textContent = restaurant_array[item].ratings;
    document.getElementById("open_hours").textContent = restaurant_array[item].open_hours;
    document.getElementById("phone_number").textContent = restaurant_array[item].phone_number;
    document.getElementById("hyperlink").src = restaurant_array[item].hyperlink;
    document.getElementById("res_photos").src = restaurant_array[item].res_photos;
    document.getElementById("res_menu").src = restaurant_array[item].res_menu
    document.getElementById("description").textContent = restaurant_array[item].description;
    document.getElementById("thumb").src = restaurant_array[item].thumb;
    document.getElementById("cuisine_type").textContent = restaurant_array[item].cuisine_type
}
