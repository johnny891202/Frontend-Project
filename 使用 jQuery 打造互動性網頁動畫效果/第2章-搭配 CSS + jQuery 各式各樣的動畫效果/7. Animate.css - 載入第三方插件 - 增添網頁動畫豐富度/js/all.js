$(document).ready(function () {
   $(".button").click(function (e) { 
    e.preventDefault();
    $(".box").toggleClass("animate__shakeX")
   });
});