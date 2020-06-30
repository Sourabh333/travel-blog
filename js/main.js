const responsive = {
    320: {
        items: 1
    },
    560: {
        items:2
    },
    960: {
        items : 3
    }
}
$(document).ready(function(){
    
    $nav=$('.nav');
    $toggleCollaps=$('.toggle-collaps');
    /**click event on toggle menu */
    $toggleCollaps.click(function(){
    $nav.toggleClass('collaps');
    })
    //owl-carousel blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:900,
        dots:false,
        nav:true,
       navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
       responsive:responsive
    });


    //click to scroll up
    $('.move-up span').click(function(){
        $('html,body').animate({
           scrollTop:0 
        },3000);
    })
});