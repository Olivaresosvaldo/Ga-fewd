$("button").on("click", function() {
  var city = $("input").val();
  console.log(city);
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=1adb8ce5910e5b0500a4662c95ed98c4", function(data) {
  console.log(data);
  
  var temp = data["main"]["temp"];
  $(".temperature").text(data["temp"]);
  });

});


//   $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=1adb8ce5910e5b0500a4662c95ed98c4", function(data) {
//   console.log(data);

//   $(.icon).attrib
// });



