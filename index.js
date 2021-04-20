$(document).ready(function(){
  $(".query").on("click",function(){
    $(".query").removeClass("afterClick");
    
    $(".answered").slideUp();
    $(".arrow").css({'transform': 'rotate(0deg)'});
    if($(this).next(".answered").css("display") === "none"){
      $(this).addClass("afterClick");
      $(this).next(".answered").slideDown();
      $(this).children('.arrow').css({'transform': 'rotate(180deg)'});
    }
    else{
        $(this).next(".answered").slideUp();
        $(this).children('.arrow').css({'transform': 'rotate(0deg)'});
        $(this).removeClass("afterClick");
    }
  })
});
