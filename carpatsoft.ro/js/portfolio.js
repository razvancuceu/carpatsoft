
$(".single-item").hover(function(){
	$(".single-header", this).slideToggle(200);
	$(".btn-single-item", this).fadeIn(200);
});
$(".single-item").mouseenter(function(){
	$(".item-thumb", this).addClass("blur");
});
$(".single-item").mouseleave(function(){
	$(".item-thumb", this).removeClass("blur");
	$(".btn-single-item", this).fadeOut(200);
});





$(".portfolio-menu").click(function(){

$(".portfolio-menu").css("color","#565656");
$(this).css("color","#06caea");



	var buttonId = $(this).attr('id');	

		$('.items-wrap > .single-item').each(function () { 

			var itemClass = $(this).attr("class").split(' ').pop();
			
		if(buttonId != itemClass){

			var itemHide = "." + itemClass;
			
			
			$(".items-wrap").find(itemHide).fadeOut(300).hide();

		}else if(buttonId == itemClass){
			var itemShow =  "." + itemClass;
			$(".items-wrap").find(itemShow).fadeIn(300);
		}


		 												});
	
										});

