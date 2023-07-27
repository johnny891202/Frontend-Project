$(document).ready(function () {
   $(".start").click(function (e) { 
      e.preventDefault();
      $(".box1").delay(0).fadeIn();
      $(".box2").delay(1000).fadeIn();
      $(".box3").delay(2000).fadeIn();
   });
});