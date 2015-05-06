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

	
	$('.large-heart-block').click(function(){
		 $(this).animate({width: '94px', height: '82px',marginLeft: '-47px'}, 'fast')
		 $(this).animate({width: '75px', height: '65px',marginLeft:'-32.5px'}, 'fast')
		 $(this).find('.large-heart-icon').animate({width: '78px', height: '68px'}, 'fast')
		 $(this).find('.large-heart-icon').animate({width: '57px', height: '49px'}, 'fast')
		 
		/*if($(this).hasClass('tada')){
		   $(this).removeClass('tada');
		}
		else{
			$(this).addClass('tada')
		}*/
	})

});