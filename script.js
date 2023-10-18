$(document).ready(function(){
    //store the URL for the API with my API key
    var URL = "https://static.codehs.com/api/12345/movies/all"; 
    //Create click funtion that calls findReleaseDate
    $("#search").click(function(){
        var movie = $("#movie").val();
        findReleaseDate (movie);
    });   
         
    function findReleaseDate(movie){
        $.getJSON(URL,function(data){
            var releaseDate = "Release date not found.";
    
            for(var key in data){
                if(data[key].name === movie){
                    releaseDate = data[key]["release-date"];
                    break;  // Found the movie, exit the loop
                }
            }
    
            $("#release-date").text("Release Date: " + releaseDate);
            

        });
    };
});