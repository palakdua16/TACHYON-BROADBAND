$(document).ready(function(){
  $(".overlay-left").slick({
     dots:false,
     arrows:false,
     autoplay:true,
     slidesToShow: 1,
  	slidesToScroll: 1,
    responsive: [
    {
      breakpoint:480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
    }
  }
  ]
  });
});


$('.count').each(function () {
                $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                                $(this).text(Math.ceil(now) + "+");
                        }
                });
            });

$('#btn-box').click(function(){
    
     $(".button-box-inner").slideToggle();
    
    $("i", this).toggleClass("fas fa-times");

});