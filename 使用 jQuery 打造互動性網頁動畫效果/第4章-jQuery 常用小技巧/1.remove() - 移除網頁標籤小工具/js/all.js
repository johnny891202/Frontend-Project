$(document).ready(function () {
   $(".remove").click(function (e) { 
      e.preventDefault();
      $(this).parent().parent().remove();
   });
});