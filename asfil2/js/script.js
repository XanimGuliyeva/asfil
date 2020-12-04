

$(document).ready(function(){
  $('input[type="radio"]').click(function(){
      var inputValue = $(this).attr("value");
      var targetBox = $("." + inputValue);
      $(".radioinfo").not(targetBox).hide();
      $(targetBox).show();
  });
});




$(function() {
  $('#selectBox').change(function(){
    $('.inputs').hide();
    $('#' + $(this).val()).show();
    if($(this).val()=='fzksxs'){
      $(".rehber").css("display", "none");
    }
    if($(this).val()=='mmc'){
      $(".rehber").css("display", "block");
    }
  });
});

