$(document).ready(function () {
   /* 字體放大 */
   $(".font-l").click(function (e) { 
      e.preventDefault();
      $(".content p").css("font-size","20px");
   });
   /* 字體中等 */
   $(".font-m").click(function (e) { 
      e.preventDefault();
      $(".content p").css("font-size","16px");
   });
   /* 字體縮小 */
   $(".font-s").click(function (e) { 
      e.preventDefault();
      $(".content p").css("font-size","13px");
   });
   /* 關閉廣告 */
   $(".ad-close").click(function (e) { 
      e.preventDefault();
      $(".ad").fadeOut();
   });
   /* 回到頂端 */
   $(".top a").click(function (e) { 
      e.preventDefault();
      $("html,body").animate({
         scrollTop: 0
      },1000)
   });
});