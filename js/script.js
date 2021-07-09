$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });


    var typed = new Typed(".typed",{
        strings: ["Supply Chain Analyst.","Programmer.","Embedded Software Developer.","AI Developer.","Robotics Software Developer.","AR/VR Developer."],
        typeSpeed: 80,
        loop: true,
        showCursor: false,
        backDelay:2000

    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        autoplay:true,
        dots: true,
        smartSpeed: 1200,
        slideTransition: 'linear',
        autoplayHoverPause:true,
        
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    

    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).on('scroll', function() {
        console.log(window.pageYOffset);
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 50){
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size:152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });
    
});
