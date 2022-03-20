$(document).ready(function(){
    $("#card-slider").owlCarousel({
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[980,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        navigation:true,
        slideSpeed:1000,
        paginationSpeed: 1000,
        autoPlay:true,
    });
    $('#project-carousel').owlCarousel({
      loop: true,
      margin: 30,
      dots: true,
      nav: true,
      items: 3,
    });
    $('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    items: 1,
    })
});