console.log('hey')
$("button").on("click", function() {
  var movies = $("input").val();
  console.log(movies);
  var url = "http://omdbapi.com/?t=" + movies;

  $.getJSON(url, function(data) {
  console.log(data);
  
  $(".title").text(data["Title"]);
  $(".year").text(data["Year"]);
  $(".poster").attr("src", data["Poster"]);
  $(".plot").text(data["Plot"]);
  
  var liItem = "<li>" + data["Title"] + "</li>";
  $('ul').append(liItem)
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

