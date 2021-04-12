/** @format */
new Freezeframe({
    trigger: 'hover',
    overlay: true
});

$(document).ready(function() {
    "use strict";

    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;

    $(".fullscreen").css("height", window_height);
    $(".fitscreen").css("height", fitscreen);

    //------- Wow JS Initialized --------//
    new WOW().init();

    //------- Go to Top --------//
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            $("#header1").addClass("header-scrolled1");
            $("#back-top").addClass("back-top-animation");
        } else {
            $("#header1").removeClass("header-scrolled1 dark");
            $("#back-top").removeClass("back-top-animation");
        }
    });

    /* ---------------------------------------------
                                                    scroll body to 0px on click
                                                 --------------------------------------------- */
    $("#back-top a").on("click", function() {
        $("body,html").animate({
                scrollTop: 0,
            },
            1000
        );
        return false;
    });
    // ------- Filter  js --------//
    $(window).on("load", function() {
        $(".filters ul li").on("click", function() {
            $(".filters ul li").removeClass("active");
            $(this).addClass("active");
            $('#easy-filter-wrap').easyFilter({
                animation: 'fade',
                duration: 0
            });
        });
    });

    //------- Niceselect  js --------//

    if (document.getElementById("default-select")) {
        $("select").niceSelect();
    }
    if (document.getElementById("service-select")) {
        $("select").niceSelect();
    }

    //------- Pre Loader --------//
    $(window).on("load", function() {
        $(".preloader-area").delay(200).fadeOut(500);
    });

    //------- Lightbox  js --------//
    $(".img-gal").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    $(".play-btn").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

    //------- Accordion  js --------//

    jQuery(document).ready(function($) {
        if (document.getElementById("accordion")) {
            var accordion_1 = new Accordion(document.getElementById("accordion"), {
                collapsible: false,
                slideDuration: 500,
            });
        }
    });

    //------- Circle Chart  js --------//

    if (document.getElementById("skills")) {
        $(".skill-1").percentcircle({
            animate: true,
            diameter: 400,
            guage: 5,
            coverBg: "#fff",
            bgColor: "#efefef",
            fillColor: "#988fff",
            percentSize: "24px",
            percentWeight: "normal",
        });

        $(".skill-2").percentcircle({
            animate: true,
            diameter: 400,
            guage: 5,
            coverBg: "#fff",
            bgColor: "#efefef",
            fillColor: "#988fff",
            percentSize: "24px",
            percentWeight: "normal",
        });

        $(".skill-3").percentcircle({
            animate: true,
            diameter: 400,
            guage: 5,
            coverBg: "#fff",
            bgColor: "#efefef",
            fillColor: "#988fff",
            percentSize: "24px",
            percentWeight: "normal",
        });

        $(".skill-4").percentcircle({
            animate: true,
            diameter: 400,
            guage: 5,
            coverBg: "#fff",
            bgColor: "#efefef",
            fillColor: "#988fff",
            percentSize: "24px",
            percentWeight: "normal",
        });
    }

    //------- Superfist nav menu  js --------//

    $(".nav-menu").superfish({
        animation: {
            opacity: "show",
        },
        speed: 400,
    });

    //------- Mobile Nav  js --------//

    if ($("#nav-menu-container").length) {
        var $mobile_nav = $("#nav-menu-container").clone().prop({
            id: "mobile-nav",
        });
        $mobile_nav.find("> ul").attr({
            class: "",
            id: "",
        });
        $("body").append($mobile_nav);
        $("body").prepend(
            '<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>'
        );
        $("body").append('<div id="mobile-body-overly"></div>');
        $("#mobile-nav")
            .find(".menu-has-children")
            .prepend('<i class="lnr lnr-chevron-down"></i>');

        $(document).on("click", ".menu-has-children i", function(e) {
            $(this).next().toggleClass("menu-item-active");
            $(this).nextAll("ul").eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
        });

        $(document).on("click", "#mobile-nav-toggle", function(e) {
            $("body").toggleClass("mobile-nav-active");
            $("#mobile-nav-toggle i").toggleClass("lnr-menu lnr-cross");
            $("#mobile-body-overly").toggle();
        });

        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $("#mobile-nav-toggle i").toggleClass("lnr-menu lnr-cross");
                    $("#mobile-body-overly").fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    //------- Smooth Scroll  js --------//

    $(".nav-menu a, #mobile-nav a, .scrollto").on("click", function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($("#header").length) {
                    top_space = $("#header").outerHeight();

                    if (!$("#header").hasClass("header-fixed")) {
                        top_space = top_space;
                    }
                }

                $("html, body").animate({
                        scrollTop: target.offset().top - top_space,
                    },
                    1500,
                    "easeInOutExpo"
                );

                if ($(this).parents(".nav-menu").length) {
                    $(".nav-menu .menu-active").removeClass("menu-active");
                    $(this).closest("li").addClass("menu-active");
                }

                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $("#mobile-nav-toggle i").toggleClass("lnr-times lnr-bars");
                    $("#mobile-body-overly").fadeOut();
                }
                return false;
            }
        }
    });

    $(document).ready(function() {
        $("html, body").hide();

        if (window.location.hash) {
            setTimeout(function() {
                $("html, body").scrollTop(0).show();

                $("html, body").animate({
                        scrollTop: $(window.location.hash).offset().top - 108,
                    },
                    1000
                );
            }, 0);
        } else {
            $("html, body").show();
        }
    });

    //------- Header Scroll Class  js --------//

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("#header").addClass("header-scrolled dark");
        } else {
            $("#header").removeClass("header-scrolled dark");
        }
    });

    //------- Owl Carusel  js --------//
    if ($(".active-brand-carusel").length) {
        $(".active-brand-carusel").owlCarousel({
            items: 5,
            loop: true,
            autoplayHoverPause: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                991: {
                    items: 4,
                },
                1024: {
                    items: 5,
                },
            },
        });
    }

    if ($(".testi_slider").length) {
        $(".testi_slider").owlCarousel({
            loop: true,
            autoplayHoverPause: true,
            margin: 30,
            items: 1,
            nav: true,
            autoplay: 2500,
            smartSpeed: 1500,
            dots: true,
            responsiveClass: true,
            navText: [
                "<i class='lnr lnr-arrow-left'></i>",
                "<i class='lnr lnr-arrow-right'></i>",
            ],
        });
    }

    if ($(".testi_header").length) {
        $(".testi_header").owlCarousel({
            margin: 10,
            loop: true,
            items: 1,
            fade: true,
            cssEase: 'ease-in',
            autoplay: 2500,
            smartSpeed: 1500,
            dots: true,
            responsiveClass: true
        });
    }

    //------- Timer Countdown  js --------//

    if (document.getElementById("count")) {
        var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="count"
            document.getElementById("count").innerHTML =
                "<div class='col'><span>" +
                days +
                "</span><br> Days " +
                "</div>" +
                "<div class='col'><span>" +
                hours +
                "</span><br> Hours " +
                "</div>" +
                "<div class='col'><span>" +
                minutes +
                "</span><br> Minutes " +
                "</div>" +
                "<div class='col'><span>" +
                seconds +
                "</span><br> Seconds </div>";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("count").innerHTML = "EXPIRED";
            }
        }, 1000);
    }

    //------- Google Map  js --------//

    if (document.getElementById("map")) {
        google.maps.event.addDomListener(window, "load", init);

        function init() {
            var mapOptions = {
                zoom: 11,
                center: new google.maps.LatLng(40.67, -73.94), // New York
                styles: [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                                color: "#e9e9e9",
                            },
                            {
                                lightness: 17,
                            },
                        ],
                    },
                    {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                                color: "#f5f5f5",
                            },
                            {
                                lightness: 20,
                            },
                        ],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                                color: "#ffffff",
                            },
                            {
                                lightness: 17,
                            },
                        ],
                    },
                    {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                                color: "#ffffff",
                            },
                            {
                                lightness: 29,
                            },
                            {
                                weight: 0.2,
                            },
                        ],
                    },
                    {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                                color: "#ffffff",
                            },
                            {
                                lightness: 18,
                            },
                        ],
                    },
                    {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                                color: "#ffffff",
                            },
                            {
                                lightness: 16,
                            },
                        ],
                    },
                    {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                                color: "#f5f5f5",
                            },
                            {
                                lightness: 21,
                            },
                        ],
                    },
                    {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                                color: "#dedede",
                            },
                            {
                                lightness: 21,
                            },
                        ],
                    },
                    {
                        elementType: "labels.text.stroke",
                        stylers: [{
                                visibility: "on",
                            },
                            {
                                color: "#ffffff",
                            },
                            {
                                lightness: 16,
                            },
                        ],
                    },
                    {
                        elementType: "labels.text.fill",
                        stylers: [{
                                saturation: 36,
                            },
                            {
                                color: "#333333",
                            },
                            {
                                lightness: 40,
                            },
                        ],
                    },
                    {
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off",
                        }, ],
                    },
                    {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                                color: "#f2f2f2",
                            },
                            {
                                lightness: 19,
                            },
                        ],
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                                color: "#fefefe",
                            },
                            {
                                lightness: 20,
                            },
                        ],
                    },
                    {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                                color: "#fefefe",
                            },
                            {
                                lightness: 17,
                            },
                            {
                                weight: 1.2,
                            },
                        ],
                    },
                ],
            };
            var mapElement = document.getElementById("map");
            var map = new google.maps.Map(mapElement, mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.67, -73.94),
                map: map,
                title: "Snazzy!",
            });
        }
    }

    // $(".nav-menu .scroll-link").on("click", function() {
    //     $(".nav-menu").find(".active").removeClass("active");
    //     $(this).addClass("active");
    // });

    $(document).on("scroll", onScroll);

    (
        function($) {
            //variable that will hold the href attr of the links in the menu
            var sections = [];
            //variable that stores the id of the section
            var id = false;
            //variable for the selection of the anchors in the navbar
            var $navbara = $('#navi a');

            $navbara.click(function(e) {
                //prevent the page from refreshing
                e.preventDefault();
                //set the top offset animation and speed
                $('html, body').animate({
                    scrollTop: $($(this).attr('href')).offset().top - 100
                }, 500);
                hash($(this).attr('href'));
            });



            //select all the anchors in the navbar one after another
            $navbara.each(function() {
                // and adds them in the sections variable
                sections.push($($(this).attr('href')));

            })
            $(window).scroll(function(e) {
                // scrollTop retains the value of the scroll top with the reference at the middle of the page
                var scrollTop = $(this).scrollTop() + ($(window).height() / 2);
                //cycle through the values in sections array
                for (var i in sections) {
                    var section = sections[i];
                    //if scrollTop variable is bigger than the top offset of a section in the sections array then 
                    if (scrollTop > section.offset().top) {
                        var scrolled_id = section.attr('id');
                    }
                }
                if (scrolled_id !== id) {
                    id = scrolled_id;
                    $($navbara).removeClass('current');
                    $('#navi a[href="#' + id + '"]').addClass('current');
                }
            })
        })(jQuery);

    //smoothscroll
    $('a[href^="#"]').on("click", function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $(".nav-menu").find(".active").removeClass("active");
        $(this).addClass("active");

        var target = this.hash;

        var $target = $(target);

        $("html, body")
            .stop()
            .animate({
                    scrollTop: $target.offset().top,
                },
                500,
                "swing",
                function() {
                    window.location.hash = target;
                    $(document).on("scroll", onScroll);
                }
            );
    });


    $(".share-container").share({
        networks: ['facebook', 'pinterest', 'googleplus', 'twitter', 'linkedin']
    });
    var shrcn = $(".share-wrapper"),
        ssb = $(".showshare");

    function showShare() {
        hideMenu();
        shrcn.fadeIn(1).removeClass("isShare").addClass("invis-share");
        $(".share-title span").shuffleLetters({});
        ssb.addClass("clshbt");
        setTimeout(function() {
            $(".soa").each(function(a) {
                var b = $(this);
                setTimeout(function() {
                    b.addClass("soavis")
                }, 150 * a);
            });

        }, 300);
    }

    function hideShare() {
        shrcn.fadeOut(400).addClass("isShare").removeClass("invis-share");
        $(".soa").removeClass("soavis");
        ssb.removeClass("clshbt");
    }
    $(".close-share").on("click", function() {
        hideShare();
    });
    ssb.on("click", function() {

        if (shrcn.hasClass("isShare")) showShare();
        else hideShare();
        return false;
    });
    //   menu ------------------
    $("#menu").menu();
    $(".sliding-menu li a.nav").parent("li").addClass("submen-dec");
    var nbw = $(".nav-button"),
        nhw = $(".nav-holder"),
        nho = $(".nav-overlay");

    function showMenu() {
        hideShare();
        nho.fadeIn(500);
        nhw.animate({
            left: "0",
            opacity: 1
        }, {
            queue: false,
            duration: 600,
            easing: "easeInOutExpo"
        });
        nbw.removeClass("but-hol").addClass("cmenu");
        setTimeout(function() {
            $(".nav-title span").shuffleLetters({});
        }, 300);
    }

    function hideMenu() {
        nhw.animate({
            left: "-1064px",
            opacity: 0
        }, {
            queue: false,
            duration: 600,
            easing: "easeInOutExpo"
        });
        nbw.addClass("but-hol").removeClass("cmenu");
        nho.fadeOut(500);
    }
    nbw.on("click", function() {
        if (nbw.hasClass("but-hol")) showMenu();
        else hideMenu();
        return false;
    });
    nho.on("click", function() {
        hideMenu();
        return false;
    });
    $(".sliding-menu a ").mousemove(function(e) {
        $(this).shuffleLetters({});
    });
    var tooltips = document.querySelectorAll('.nav-overlay .tooltip');
    window.onmousemove = function(e) {
        var x = (e.clientX + 20) + 'px',
            y = (e.clientY + 20) + 'px';
        for (var i = 0; i < tooltips.length; i++) {
            tooltips[i].style.top = y;
            tooltips[i].style.left = x;
        }
    };

    //   appear------------------
    $(".stats").appear(function() {
        $(".num").countTo();
    });
    $(".piechart-holder").appear(function() {
        $(this).find(".chart").each(function() {
            var cbc = $(".piechart-holder").attr("data-skcolor");
            $(".chart").easyPieChart({
                barColor: cbc,
                trackColor: "#eee",
                scaleColor: "#eee",
                size: "150",
                lineWidth: "40",
                lineCap: "butt",
                animate: 3500,
                easing: "easeInBounce",
                onStep: function(a, b, c) {
                    $(this.el).find(".percent").text(Math.round(c));
                }
            });
        });
    });
    $(".skillbar-box").appear(function() {
        $(this).find("div.skillbar-bg").each(function() {
            $(this).find(".custom-skillbar").delay(600).animate({
                width: $(this).attr("data-percent")
            }, 1500);
        });
    });

});
$(function() {

    $(".progress").each(function() {

        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
            if (value <= 50) {
                right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
                right.css('transform', 'rotate(180deg)')
                left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
        }

    })

    function percentageToDegrees(percentage) {

        return percentage / 100 * 360

    }

});


function onScroll(event) {
    var scrollPos = $(document).scrollTop();

    $("#nav-menu-container .nav-menu a").each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (
            refElement.position().top <= scrollPos &&
            refElement.position().top + refElement.height() > scrollPos
        ) {
            $("#nav-menu-container ul li a").removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}