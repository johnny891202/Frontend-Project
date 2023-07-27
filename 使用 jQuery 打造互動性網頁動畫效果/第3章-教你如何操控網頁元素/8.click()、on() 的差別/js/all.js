$(document).ready(function () {
   $(".wrap").on("click","h1",function(e){
      e.preventDefault();
      alert("有效!");
   });
   $(".box").html("<h1>用jquery動態產生的</h1>")
});