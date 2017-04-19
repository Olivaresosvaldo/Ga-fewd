var movies = [];

$("button.search").on("click", function() {
  var title = $("input").val();
  $.getJSON("http://omdbapi.com/?t=" + title, function (monkey) {
    var titleAndRating = monkey["Title"] + " (" + monkey["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(monkey["Year"]);
    $(".poster").attr("src", monkey["Poster"]);
    $(".plot").text(monkey["Plot"]);

    var li = $("<li>" + monkey["Title"] + "</li>");
    $("ul.search-history").append(li);

    var stashedMovie = {
      title: monkey["Title"],
      score: monkey["Ratings"][1]["Value"]
    }

    movies.push(stashedMovie);
  });
});


$("ul").on("click", function(event) {
  var title = $(event.target).text();

  $.getJSON("http://omdbapi.com/?t=" + title, function(data) {
    var titleAndRating = data["Title"] + " (" + data["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(data["Year"]);
    $(".poster").attr("src", data["Poster"]);
    $(".plot").text(data["Plot"]);
  });
})


if(checkbox.isSelected) {
$("button.filter").on("click", function() {
  $("ul").children().remove();
    movies.forEach(function(aSingleMovie) {
    var scoreAsInt = parseInt(aSingleMovie["score"])
    if ( scoreAsInt > 50 ) {
      var li = $("<li>" + aSingleMovie["title"] + "</li>");
      $("ul.search-history").append(li);
    }
  })
})
} 
else {
$("button.filterbad").on("click", function() {
  $("ul").children().remove();

  movies.forEach(function(aSingleMovie) {
    var li = $("<li>" + aSingleMovie["title"] + "</li>");
    $("ul.search-history").append(li);
  })
})
}








////////////////////////////////////////////////////////////////////////////

$("input").on("keypress", function(event){
  if(event.keyCode===13){
   myclick()
    } 
    else {
      console.log('nope')
    }
});

function myclick(){
  var title = $("input").val();
  $.getJSON("http://omdbapi.com/?t=" + title, function (monkey) {
    var titleAndRating = monkey["Title"] + " (" + monkey["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(monkey["Year"]);
    $(".poster").attr("src", monkey["Poster"]);
    $(".plot").text(monkey["Plot"]);

    var li = $("<li>" + monkey["Title"] + "</li>");
    $("ul.search-history").append(li);

    var stashedMovie = {
      title: monkey["Title"],
      score: monkey["Ratings"][1]["Value"]
    }

    movies.push(stashedMovie);
  })
}

  // var index = 0;

  // while (index < movies.length) {
  //   var scoreAsInt = parseInt(movies[index]["score"]);
  //   if (scoreAsInt > 50 ) {
  //     var li = $("<li>" + movies[index]["title"] + "</li>");
  //     $("ul.search-history").append(li);
  //   }
  //   index = index + 1;
  // }


  // get rid of all the bad movies
  //   * search through the array
  //   * for each movie that meets our criteria
  //   * insert it into the DOM



// if (rottenTomatoesScore < 50) {
//    removeLi that corresponds to that score
// }

// var movies = [
//   {
//     title: "Gigli",
//     score: 6
//   },
//   {
//     title: "Finding Nemo",
//     score: 95
//   },
//   {
//     title: "Titanic",
//     score: 97
//   }
// ]

// $.getJSON("http://omdbapi.com/?t=" + title, function(score) { //me trying to do remove the bad movies.
// var score = score["Metascore"];
// if(Metascore <50){
// remove(li);
// };
// })
