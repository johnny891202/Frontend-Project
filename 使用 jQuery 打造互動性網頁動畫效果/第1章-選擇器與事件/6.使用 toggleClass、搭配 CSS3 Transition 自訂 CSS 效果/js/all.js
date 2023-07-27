$(document).ready(function () {
    $(".button").click(function (e) { 
        e.preventDefault();
        $(".text").toggleClass("active");
    });
});