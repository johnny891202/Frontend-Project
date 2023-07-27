$(document).ready(function () {
    /* Swiper */
    const swiper = new Swiper('.swiper', {
        /* 可選參數 */
        direction: 'horizontal', /* horizontal水平 vertical垂直 */
        speed: 1000,
        loop: true,
        autoplay:{
          delay: 2000
        },
        effect: 'coverflow',
      
        /* 分頁設置 */
        pagination: {
          el: '.swiper-pagination',
        },
        
        /* 上一個/下一個按鈕設置 */
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    /* lightbox */
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel':"照片 %1 of %2"
    })
});