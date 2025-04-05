(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        var $videoSrc;
        $('.btn btn-primary').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);


    //video modal for about and index

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })

        $('#videoModal').on('hidden.bs.modal', function (e) {
            const iframe = $(this).find('iframe');
            iframe.attr('src', iframe.attr('src')); // Reset the src to stop the video
        });



  //video modal for gpon

        $('#videoModal1').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal1').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })

        $('#videoModal1').on('hidden.bs.modal', function (e) {
            const iframe = $(this).find('iframe');
            iframe.attr('src', iframe.attr('src')); // Reset the src to stop the video
        });


//video modal for fiber optics

        $('#videoModal2').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal2').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })

        $('#videoModal2').on('hidden.bs.modal', function (e) {
            const iframe = $(this).find('iframe');
            iframe.attr('src', iframe.attr('src')); // Reset the src to stop the video
        });




//video modal for door access

        $('#videoModal3').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal3').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })

        $('#videoModal3').on('hidden.bs.modal', function (e) {
            const iframe = $(this).find('iframe');
            iframe.attr('src', iframe.attr('src')); // Reset the src to stop the video
        });


//video modal for enterprise wifi



        $('#videoModal4').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal4').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })

        $('#videoModal4').on('hidden.bs.modal', function (e) {
            const iframe = $(this).find('iframe');
            iframe.attr('src', iframe.attr('src')); // Reset the src to stop the video
        });



//video modal for cctv

        $('#videoModal5').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal5').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })

        $('#videoModal5').on('hidden.bs.modal', function (e) {
            const iframe = $(this).find('iframe');
            iframe.attr('src', iframe.attr('src')); // Reset the src to stop the video
        });



//video modal for strufturd cabling

        $('#videoModal6').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal6').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })

        $('#videoModal6').on('hidden.bs.modal', function (e) {
            const iframe = $(this).find('iframe');
            iframe.attr('src', iframe.attr('src')); // Reset the src to stop the video
        });

        
    });


    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

