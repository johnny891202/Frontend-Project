$(document).ready(function () {
   $(".list > li > a").click(function (e) { 
      e.preventDefault();
      $(this).toggleClass("active");
      $(this).parent().find("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      $(this).parent().siblings().find("a").removeClass("active");
   });
});