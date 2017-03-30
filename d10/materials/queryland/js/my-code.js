console.log("Helloooo");



// // console.log("I was clicked!");
//  // "button was clicked">>>> p. cool
//   var clickCount = 0;
//   var orignalText = $("p.cool").text();

// $("button").on("click", function() {
//   clickCount = clickCount + 1;
//   console.log(clickCount); 
  
//     if (clickCount  ===2){
//   $("p.cool").text("Button was clicked for the second time!");
//     }

// else{

//   $("p.cool").text(orignalText);
// }

// });



$("button").on("click", function() {
var stuffTheUserTyped = $("input").val();
console.log(stuffTheUserTyped)

$("h1").text(stuffTheUserTyped);




});

