console.log('hi')


$('button.file').on('click', function(){
  if ( $("#myDropdown").css("display") === "none" ) {
    $('#myDropdown').css("display", "block");  
    //$('#myDropdown').show();
  } else {
    $('#myDropdown').css("display", "none");
  }
  //$('#myDropdown').hide();
})


  //$('#myDropdown').toggle(); //this can do the entire


$('button.edit').on('click', function(){
  $('#myDropdown2').toggle();
})  
