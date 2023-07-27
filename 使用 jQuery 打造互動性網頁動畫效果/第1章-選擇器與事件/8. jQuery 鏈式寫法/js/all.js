$(document).ready(function () {
   $(".button").click(function (e) { 
    e.preventDefault();
    $(".box").slideUp(2000).slideDown(1000).fadeOut(1000).fadeIn(1000);
   });
});