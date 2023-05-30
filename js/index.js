$(".backtotop").click(function(){
    $("html,body").animate({
      scrollTop:0
    },1000)
  })
  
$(window).scroll(function(){
    if($(window).scrollTop()>750){
      $(".backtotop").fadeIn()
    }else(
      $(".backtotop").fadeOut()
    )
 
    if($(window).scrollTop()>300){
      $(".menu").addClass("fixedmenu")
    }else(
      $(".menu").removeClass("fixedmenu")
    )


})