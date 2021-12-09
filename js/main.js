//default settings:
autoplay:false
autoplayTimeout:5000
autoplayHoverPause:false

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:2,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
//Owl-carousel
$('.site-main .about-area .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        544:{
            items:2
        }
    }
})
