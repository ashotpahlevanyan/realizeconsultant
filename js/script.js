$(document).ready(function(){

	$(".navbar-toggle").on("click", function(event){
		//$(this).toggleClass("activated");
		$(".topBar").toggleClass("activated");
		$(".content").toggleClass("expanded");
		
	});

	$(".navBar .nav li a").on("click", function (){
		$(".navBar .nav li").removeClass("selected");
		$(this).parent().addClass("selected");
	});


	$('.upToTop').on('click', scrollToTop);

	function scrollToTop() {
		verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
		element = $('body');
		offset = element.offset();
		offsetTop = offset.top;
		$('html, body').animate({scrollTop: offsetTop}, 1000, 'linear');
	}
	$(".feature button").on("click", function(){
		location.href = $(this).attr('data-href');
	});
	$(".signInUp .signIn").on("click", function(){
		location.href = $(this).attr('data-href');
	});
	$(".signInUp .signUp").on("click", function(){
		location.href = $(this).attr('data-href');
	});

});