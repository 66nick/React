
		$(document).ready(function(){
   $('nav a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
	
	       e.preventDefault();
   });             
   return false;                           	
});
( function($) {
  $(document).ready(function(){
	  $(window).scroll(function(){
		   var bo = $(document).scrollTop();
		  
			if(bo > 300)
			{
			$(".header").css("height",0);
			
					
			$('.for_menu').css({
			'position':'fixed',
			'top':0,
			'left':0,
			'z-index':99999
			
			});
						
			return
			}
	 if(bo < 300)
			{
			$(".header").css("height", '');
			
			$("body").css("margin-top",0);
			$('.for_menu').css({
			'position':'',
			'top':'',
			'left':''
			});
			
			}
			
 });
    });
    
})(jQuery);


