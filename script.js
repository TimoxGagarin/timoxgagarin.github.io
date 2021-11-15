$(function(){
	$(".arrow-up").click(function(){
		$("html, body").animate({scrollTop: 0}, "slow");
		return false;
	});
	
	$(".offer-down").click(function(){
		$("html, body").animate({scrollTop: $("header").height() + $(".resume").height() + 350}, "slow");
		return false;
	});
});