  ( function($) {
  $(document).ready(function(){
	  $(window).scroll(function(){
		   var bo = $(document).scrollTop();
		  
			if(bo > 40)
			{
			$(".header").css("height",50);
			$(".A_left").css("display","none");
			$(".D_right p,.btn").css("display","none");
			$(".B_center").css("display","none");
		
			$('.menu').css({
			'position':'fixed',
			'top':40,
			'left':0,
			'color': 'red'
			});
			$('.header').css({
			'position':'fixed',
			'top':0,
			'left':0
			});
			
			return
			}
	 if(bo < 30)
			{
			$(".header").css("height", '');
			$(".A_left").css("display","block");
			$(".D_right p,.btn").css("display","block");
			$(".B_center").css("display","");
			$('.menu').css({
			'position':'',
			'top':'',
			'left':''
			});
			$('.header').css({
			'position':'',
			'top':'',
			'background':'',
			'left':''
			});
			}
			
 });
    });
})(jQuery);