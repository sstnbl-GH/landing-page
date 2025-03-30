/*
-----------------------------------------------------------------------
* Template Name    : Himton | Responsive Bootstrap 5 Landing Template * 
* Author           : ThemesBoss                                        *
* Version          : 2.0.2                                            *
* Created          : March 2018                                       *
* File Description : Main JS file of the template                    *
*----------------------------------------------------------------------
*/

! function($) {
    "use strict";

    var HimtonApp = function() {};

    //scroll
    HimtonApp.prototype.initStickyMenu = function() {
        $(window).on('scroll', function() {
            var secondFeature = $('#services').offset().top;
            var scroll = $(window).scrollTop();
            if (scroll >= 600) {
                $('.sticky').css({
                    "top": '0px'
                });
            } else {
                $('.sticky').css({
                    "top": '-400px'
                });
            }
            if (scroll >= secondFeature - 200) {
                $(".mobileScreen").css({
                    'background-position': 'center top'
                });
            }
            return false;
        });
    },

    //Smooth
    HimtonApp.prototype.initSmoothLink = function() {
        $('.navbar-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    //ScrollSpy
    HimtonApp.prototype.initScrollspy = function() {
        $("#navbarCollapse").scrollspy({
            offset: 20
        });
    },

    //Client Slider
    HimtonApp.prototype.initTestiMonial = function() {
        $("#owl-demo").owlCarousel({
            autoPlay: 7000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });
    },

    //Mfpvideo
    // HimtonApp.prototype.inithomepopvideo = function() {
    //     $('.watch-video').magnificPopup({
    //         disableOn: 700,
    //         type: 'iframe',
    //         mainClass: 'mfp-fade',
    //         removalDelay: 160,
    //         preloader: false,
    //         fixedContentPos: false
    //     });
    // },

    //Mfpimg
    // HimtonApp.prototype.initMagnificPopup = function() {
    //     $('.img-zoom').magnificPopup({
    //         type: 'image',
    //         closeOnContentClick: true,
    //         mainClass: 'mfp-fade',
    //         gallery: {
    //             enabled: true,
    //             navigateByImgClick: true,
    //             preload: [0, 1]
    //         }
    //     });
    // },

    HimtonApp.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initScrollspy();
        this.initTestiMonial();
        // this.inithomepopvideo();
    },
    //init
    $.HimtonApp = new HimtonApp, $.HimtonApp.Constructor = HimtonApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.HimtonApp.init();
}(window.jQuery);