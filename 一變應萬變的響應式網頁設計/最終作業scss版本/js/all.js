$(document).ready(function () {
    $(".show-menu").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("menu-show");
    });
    $(".fa-heart").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("fas");
    });
    $(window).scroll(function(){
        if($(window).scrollTop() >= 20){
            $(".scroll-to-top").fadeIn(250);
        }
        else {
            $(".scroll-to-top").fadeOut(250);
        }
    });
    $(".scroll-to-top").click(function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            500
        );
    });
});