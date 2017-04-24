
$(document).ready(function(){
	  	var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength-length;
  $('#chars').text(length);
});
 $('.parallax-window').parallax({imageSrc:'bg.jpg'});
    
});
//$('.owl-carousel').owlCarousel({
//    rtl:true,
//    loop:true,
//    margin:10,
//    autoplay:true,
//    autoplayTimeout:1000,
////    autoplayHoverPause:true,
//
//    responsive:{
//        0:{
//            items:1
//        },
//        600:{
//            items:3
//        },
//        1000:{
//            items:5
//        }
//    }
//});
$("#bg_btn").click(function(){
    $(".box").css("background-color","red");
});
  $( function() {
    $( "#datepicker" ).datepicker();
  } );
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
$("#bg").change(function(){
    var color= $("#bg").val();
    $("body").css("background",color);
});

$(".slider").slick({

  // normal options...
  infinite: false,
    autoplay:true,

  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});
