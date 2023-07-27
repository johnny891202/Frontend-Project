$(document).ready(function () {
   $(".question h3").click(function (e) { 
      e.preventDefault();
      /* 點擊到的h3亮起來 */
      $(this).toggleClass("active");
      /* 尋找父元素question並找到p元素展開 */
      $(this).parent().find("p").slideToggle();
      /* 尋找父元素question以外的元素裡面的h3去除class*/
      $(this).parent().siblings().find("h3").removeClass("active");
      /* 尋找父元素question以外的元素裡面的p關閉 */
      $(this).parent().siblings().find("p").slideUp();
   });
});