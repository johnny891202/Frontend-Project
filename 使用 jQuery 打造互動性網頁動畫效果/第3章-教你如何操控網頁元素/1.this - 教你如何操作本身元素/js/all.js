$(document).ready(function () {
   $(".menu li").click(function (e) { 
      e.preventDefault();
      $(this).toggleClass("active")
   });
});