$(document).ready(function () {
    $(".button").click(function (e) { 
        e.preventDefault();
        $(".text").fadeToggle(3000);
    });
});