$(document).ready(function () {
    $(".button").click(function (e) { 
        e.preventDefault();
        $(".text").slideToggle(3000);
    });
});