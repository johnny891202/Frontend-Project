$(document).ready(function () {
    $(".show-menu").click(function(e){
        e.preventDefault();

        $(".menu").slideToggle(1500,function(){
            if($(this).css("display")==="none"){
                $(this).removeAttr("style");
            }
        })
    })
});