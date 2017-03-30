$("a").on("click", function() {
  console.log("this button was clicked"); 

var stuffTheUserTyped = $("input").val();

var r = $("#red").val();

var g = $("#green").val();

var b =  $("#blue").val();

var rgb = "rgb(" + r + "," + g + "," + b + ")" 
console.log(rgb)


$('#wrapper').css('background-color', rgb);

$('#colorful-text').text(rgb)

})