$(document).ready(function(){
  $(".query").on("click",function(){
    $(this).toggleClass("afterClick");
    if($(this).next(".answered").css("display") === "none"){
      $(this).next(".answered").slideDown();
      $(this).children('.arrow').css({'transform': 'rotate(180deg)'});

    }
    else{
        $(this).next(".answered").slideUp();
        $(this).children('.arrow').css({'transform': 'rotate(0deg)'});
    }
  })
});
