function getIt(){
  $('p').on('click', function(){
  alert("Hey!")
});

function frameIt(){
  $('img').on('load', function(){
  $('img').append("border", "red")
});
}  
  
}







$(document).ready(function(){

  getIt();
  frameIt();

});
