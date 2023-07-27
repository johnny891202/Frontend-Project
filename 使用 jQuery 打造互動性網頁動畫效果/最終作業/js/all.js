$(document).ready(function () {
    /* 下拉式選單點擊 */
    $(".dropdown").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).parent().find(".dropdown-open").slideToggle(250);
        $(this).parent().siblings().find(".dropdown").removeClass("active");
        $(this).parent().siblings().find("ul").slideUp(250);
    });
    /* 橫幅 */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      speed: 2000,
      autoplay:{
          delay: 3000
      },
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      /* scrollbar: {
        el: '.swiper-scrollbar',
      }, */
    });
    /* lightbox效果 */
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': false,
      "positionFromTop": 300,
    });
    /* 當畫面下滑一定程度顯示回到頂端按鍵 */
    function showBtnCondtion(){
      if($(this).scrollTop()>100){
        $(".to-top").fadeIn();
      }
      else{
        $(".to-top").fadeOut();
      }
    }
    $(window).scroll(showBtnCondtion);
    /* 回到頂端 */
    $(".to-top").click(function (e) { 
      e.preventDefault();
      $("html,body").animate({scrollTop:0},2000)
  });
});