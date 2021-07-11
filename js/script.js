$(window).on("load",function(){
    $(".loader .inner").fadeOut(2500,function(){
        $(".loader").fadeOut(2700);
    });
})

$(document).ready(function(){
    $(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
  });
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
    
    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on('scroll',stickNavigation);

    function stickNavigation(){

        const body = $("body");

        if($(window).scrollTop() >= navTop){
            body.css("padding-top",nav.outerHeight()+"px");
            body.addClass("fixedNav");
        }
        else{
            
            body.css("padding-top",0);
            body.removeClass("fixedNav");
        }

    }

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter: '*',
        animationOptions:{
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions:{
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false; 
    });
});


/**/