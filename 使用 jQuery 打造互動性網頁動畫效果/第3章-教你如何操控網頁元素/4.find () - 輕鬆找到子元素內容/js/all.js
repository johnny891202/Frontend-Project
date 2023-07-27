$(document).ready(function () {
   $(".cart li").click(function (e) { 
      e.preventDefault();
      $(this).find("h3").toggleClass("active");
      $(this).siblings().find("h3").removeClass("active");
   });
});