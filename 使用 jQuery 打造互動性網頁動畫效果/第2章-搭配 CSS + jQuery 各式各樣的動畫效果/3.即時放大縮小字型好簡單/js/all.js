$(document).ready(function () {
   $(".font-l").click(function (e) { 
      e.preventDefault();
      $(".content p").css("font-size","20px");
   });
   $(".font-m").click(function (e) { 
      e.preventDefault();
      $(".content p").css("font-size","16px");
   });
   $(".font-s").click(function (e) { 
      e.preventDefault();
      $(".content p").css("font-size","13px");
   });
});