var movies = [];

var printToDom = function() {
    var displayName = function() {
        for (var i = 0; i < movies.length; i++) {
            var x = x + bob[i];
        }
    };
    document.getElementById('arrayDisplay').innerHTML = displayName;
};



$(document).ready(function functionName() {
    $("#search").click(function() {
        var title = $('#movieTitle').val();
        console.log('Now searching for ' + title);
        search(title);
    });

    var search = function(movieTitle) {
        $.ajax({
            url: 'http://www.omdbapi.com/?s=' + movieTitle,
            dataType: 'JSON',
            success: function(data) {
                console.log(data);
                for (var i = 0; i < data.Search.length; i++) {
                    movies[i] = data.Search[i];
                }
                console.log('Found ' + movies.length + " movies with that title.");
                printToDom();
            }
        });
    };

    var printToDom = function() {
        console.log('Now printing: ' + movies);
        $('#displayMovies').append(movies);
    }
});
