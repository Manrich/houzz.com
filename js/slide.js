$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousel-product');
	right_carusel(carusel);
	return false;
});

$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.carousel-product');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.tovar-block').outerWidth();
   $(carusel).find(".carousel-items .tovar-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .tovar-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 300); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.tovar-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 300, function(){
	  $(carusel).find(".carousel-items .tovar-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .tovar-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}