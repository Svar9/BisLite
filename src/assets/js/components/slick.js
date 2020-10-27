//= ../../../../node_modules/slick-carousel/slick/slick.js

$(function(){
    
    $(".slider__inner").slick({
        arrows: false,
        dots: true,
    });
    
    $(".works__slider").slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
              }
            }]
    });
    

});