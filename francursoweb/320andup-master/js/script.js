$(document).ready(function(){
	$('.navbar').removeClass('open');
	$('.menu-button').on('click',function(){
		$('.navbar').toggleClass('open');
	});
	
	var changeSlide=function(){
		var $active=$('.slider .active');
		if($active.length===0){
			$active=$('.slide').last();
		}
		var $next=$active.next().length ? $active.next() : $('.slide').first();
		$active.addClass('last-active');
		$next.addClass('active');
		$active.removeClass('active last-active');
	}
	$(function(){
	  setInterval(changeSlide, 5000);
	  });
});