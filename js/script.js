$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(150);

		$(this).addClass('active');

		$('.drop').find('li').click(function(){

			var selectResult = $(this).html();

			$(this).parent().parent().find('input').val(selectResult);

			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			dropBlock.slideUp(150);
		});

	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(150);
	}
	return false;
});



$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top ==0) $(".houzz-header-secondary").slideDown(250);
        else $(".houzz-header-secondary").slideUp(350);
    });
});

$( document ).ready(function() {
	 $('.houzz-header').hover(
          function () {
            if(($('.houzz-header-secondary').css('display')=='none')){
            	$('.houzz-header-secondary').slideDown(250);
            }
          });

	$('.large-heart-icon').click(function(){
		 $(this).animate({opacity: '0'}, 250)
		 $(this).animate({opacity:'1'}, 250)


	/*$('.large-heart-block').click(function(){
		 $(this).animate({width: '94px', height: '84px',marginLeft: '-45.5px'}, 'fast')
		 $(this).animate({width: '75px', height: '65px',marginLeft:'-32.5px'}, 'fast')
		 $(this).find('.large-heart-icon').animate({width: '77px', height: '67px'}, 'fast')
		 $(this).find('.large-heart-icon').animate({width: '57px', height: '49px'}, 'fast')*/
		 
		
	})

	$('.sidebar-header').click(function(){
   		if($('.sidebar-body').css('display') == 'block'){
   			$(this).addClass('active');
	        $(this).parent('.sidebar').children('.sidebar-body').slideUp(350);
	  	}
	  	else if($('.sidebar-body').css('display') == 'none'){
   			$(this).removeClass('active');
	        $(this).parent('.sidebar').children('.sidebar-body').slideDown(350);
	  	}
	  	
	})
	

});