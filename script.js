$(document).ready(function(){
    var URL = "https://static.codehs.com/api/12345/movies/all"; 
    $("#search").click(function(){
        var movies = $("#movie").val();
        findReleaseDate (movie);
    });        
        function findReleaseDate(movie){
            $.getJSON(URL,handleData)
            function handleData(data){
                const movieData = data.find(item=>item.title == movie);
                if (movieData){
                    const releaseYear = movieData.release-date;
                    $("#release-date").text(releaseYear);
                }else {
                    $("#release-date").text("Movie not found.");
                }                    

            }        
        }
});