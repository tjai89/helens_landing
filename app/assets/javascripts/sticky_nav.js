$(document).ready(function() {
   var navoffeset=$(".top-nav").offset().top;
   $(window).scroll(function(){
    var scrollpos=$(window).scrollTop(); 
    if(scrollpos >=navoffeset){
      $(".top-nav").addClass("fixed");
    }else{
      $(".top-nav").removeClass("fixed");
    }
   });
});
