$(document).ready(function(){
    var carousel = $(".top_selected_apps_slider");
    carousel.owlCarousel({
        loop:true,
        margin:27,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

    checkClasses();
    carousel.on('translated.owl.carousel', function(event) {
        checkClasses();
    });

    function checkClasses(){
        var total = $('.owl-carousel .owl-stage .owl-item.active').length;

        $('.owl-carousel .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

        $('.owl-carousel .owl-stage .owl-item.active').each(function(index){
            if (index === 0) {
                // this is the first one
                $(this).addClass('firstActiveItem');
            }
            if (index === total - 1 && total>1) {
                // this is the last one
                $(this).addClass('lastActiveItem');
            }
        });
    }




    $('.customer_stories_slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })
    $('.testmonial_slider').owlCarousel({
        loop:true,
        margin:56,
        responsiveClass:true,
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })


    $('.slider_card').click(function(e) {
        e.preventDefault();
        $('.slider_card').removeClass('custom_active');
        $(this).addClass('custom_active');
    });



    $('.go_to_bottom_icon').on('click',function(){
        $(window).scrollTop(1000);
    })
    $('.venobox').venobox({
        titleattr: 'data-title'
    });

    $(".category__child_button").click(function(){
        $(".category_dropdown").toggleClass("block_display");
    })
    $(".view_more_slider_card").click(function(){
        $(".view_more_row").toggleClass("block_display");
    })
})
