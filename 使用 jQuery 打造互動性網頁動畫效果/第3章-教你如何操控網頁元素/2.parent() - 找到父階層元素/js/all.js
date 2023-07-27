$(document).ready(function () {
   $(".addCart").click(function (e) { 
      e.preventDefault();
      $(this).toggleClass("active");
      $(this).parent().toggleClass("active");
   });
});