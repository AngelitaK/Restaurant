function fetchComments() {
    var request = new XMLHttpRequest();

    request.open('GET', comment_url, true);

    //This command starts the calling of the comments api
    request.onload = function() {
    //get all the comments records into our comments array
    comment_array = JSON.parse(request.responseText);
    displayAllReview(category);
    };
    request.send();
}
function displayAllReview() 
{    
    var table = document.getElementById("Allreview");
    

    table.innerHTML = "";    
    totalreview = comment_array.length;    
    for (var count = 0; count < totalreview; count++) 
    {            
            var rev_id = comment_array[count].rev_id;           
            var res_rev_id = comment_array[count].res_rev_id; 
            var acc_rev_id = comment_array[count].acc_rev_id;   
            var rev_stars = comment_array[count].rev_stars;
            var reviewdate = comment_array[count].reviewdate;  
            var rev_title = comment_array[count].rev_title;   
            var rev_comments = comment_array[count].rev_comments;
            var cell = '<div class="col-md-4" style="float: none; margin: 50 auto; text-align: center; padding-top:35px; padding-left: 35px; padding-right: 35px;">' +
                '<div class="column ">' +                          
                            '<div class="row" >' +          
                                '<form >' +
                                            '</form>' + '<p>' +
                                            '<label for="res_rev_id" id="bold">Restaurant Name :    </label>' +
                                            '<span id="revdata">' +   res_rev_id + '</span><br>' +
                                            '<label for="res_rev_id" id="bold">Username :   </label>' +
                                            '<span id="revdata">' +   acc_rev_id + '</span><br>' +
                                            '<label for="res_rev_id" id="bold">Ratings :   </label>' +
                                            '<span id="revdata">' +   rev_stars + '</span><br>' +
                                            '<label for="res_rev_id" id="bold">Date Posted :   </label>' +
                                            '<span id="revdata">' +   reviewdate + '</span><br>' +
                                            '<label for="res_rev_id" id="bold">Review Title :   </label>' +
                                            '<span id="revdata">' +   rev_title + '</span><br>' +
                                            '<label for="res_rev_id" id="bold">Review :   </label>' +
                                            '<span id="revdata">' +   rev_comments + '</span><br>' +

                                    '</div>' +     
                            '</div>' +
                        '</div>'; 
             table.insertAdjacentHTML('beforeend', cell);       
             restaurantCount++; 
    }

}


//This function is to display the individual restaurants details
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("rev_id").textContent = comment_array[item].rev_id;
    document.getElementById("res_rev_id").textContent = comment_array[item].res_rev_id;
    document.getElementById("acc_rev_id").textContent = comment_array[item].acc_rev_id;
    document.getElementById("rev_stars").textContent = comment_array[item].rev_stars;
    document.getElementById("reviewdate").textContent = comment_array[item].reviewdate;
    document.getElementById("rev_title").textContent = comment_array[item].rev_title;
    document.getElementById("rev_comments").textContent = comment_array[item].rev_comments;
    
}
