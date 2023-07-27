$(document).ready(function () {
   $(".button").click(function (e) { 
    e.preventDefault();
    $(".box").stop().slideToggle(2000);
   });
});