$(document).ready(function () {
    $(".show-menu").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("menu-show");
    });
    $(".fa-heart").click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("fas");
    });
});

