$('.mobile-nav-toggle, .tint').click(function(){
	if($('.mobile-nav').hasClass('is-open')){
		$('.mobile-nav').animate({'top':'-325px'},300);
		$('.tint').animate({'opacity' : '0'});
 		setTimeout(function(){
			$('.mobile-nav').removeClass('is-open');
			$('.tint').css({'display' : 'none'});},400);
	}else{
		$('.mobile-nav').animate({'top':'20px'},300).addClass('is-open');
		$('.tint').css({'display' : 'block'}).animate({'opacity' : '1'});	
	}
		$('span', '.mobile-nav-toggle').toggleClass('changed');
});


var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5749da0206abb9034a4247fc/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();