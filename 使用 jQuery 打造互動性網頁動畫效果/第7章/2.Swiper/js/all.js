$(document).ready(function () {
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
      
        /* 滾動條設置 */
        /* scrollbar: {
          el: '.swiper-scrollbar',
        }, */
      });
});