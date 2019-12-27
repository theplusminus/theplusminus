/** ripple effect controller */
$.ripple(".btn, .btn-orange", {
	debug: false, 
	on: 'mousedown',
	opacity: 0.5,
	color: "auto",
	multi: false,
	duration: 0.7,
	rate: function(pxPerSecond) {
        return pxPerSecond;
    },
	easing: 'linear'
});
/** link */
$(document).ready(function(){
    $('a[href*="#"]').on("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
    return false;
    });
});
/** gallery filter */
$(document).ready(function(){
    $(".btn_gal").on("click", function(){
        var value = $(this).attr("data-filter");
        if(value == "all"){
            $(".filter").show("1000");
        }
        else{
            $(".filter").not("."+value).hide("1000");
            $(".filter").filter("."+value).show("1000");
        }
    });
    $("ul .btn_gal").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});
/** magnefic */
$(".gal-inner").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled: true
    }
});