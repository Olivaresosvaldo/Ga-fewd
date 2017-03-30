console.log("This is my java calculator")


$("button").on("click", function() {
  var celsius = $("input").val();
  var fahrenheit = celsius * 9/5 + 32;
  console.log(fahrenheit); 

$("#converted").text(fahrenheit);



});


// temps = (temps-32) * 5/9.0; 
// tempScale = "Celsius."; }



// // convert C to F 
// temps = (temps * 9/5.0) +32; 
// tempScale = "Fahrenheit."; 
// }
