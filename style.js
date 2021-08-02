$(document).ready(function() {
    $(".log").click(function() {
        $(".bg").addClass("bg-active");
    });
    $(".close").click(function() {
        $(".bg").removeClass("bg-active");
    });
    $(".created").click(function() {
        $(".sign").addClass("sign-inactive")
        $(".login").addClass("login-active").removeClass("login-inactive");
    });
    $(".create").click(function() {
        $(".login").addClass("login-inactive");;
        $(".sign").addClass("sign-active").removeClass("sign-inactive");
    });
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $(".nav-bar").addClass("sticky");
        } else {
            $(".nav-bar").removeClass("sticky");
        }
    });
    $(".menubtn").click(function() {
        $(".nav-bar .menu").toggleClass("active");
        $(".menubtn i").toggleClass("active");
    });
    $(".search").click(function() {
        $(".searchbar").addClass("searchbar-active");
    });
    $(".search-cancel").click(function() {
        $(".searchbar").removeClass("searchbar-active");
    });


    const typed = new Typed(".typing", {
        strings: ["walking and exercise", "outdoor experience "],
        typeSpeed: 80,
        backspeed: 40,
        loop: false,
    });
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            270: {
                items: 1,
                nav: false,
            },
            380: {
                items: 2,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 4,
                nav: false,
            },
        },
    });
    $(".carousel2").owlCarousel({
        margin: 0,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            270: {
                items: 1,
                nav: false,
            },
            380: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });
    $(".carousel3").owlCarousel({
        margin: 0,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            270: {
                items: 1,
                nav: false,
            },
            380: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 4,
                nav: false,
            },
        },
    });
    $(".carousel4").owlCarousel({
        margin: 0,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            270: {
                items: 1,
                nav: false,
            },
            380: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 4,
                nav: false,
            },
        },
    });

});
// $(".log").click(function() {
//     $(".bg").addClass("bg-active");
// });
// $(".created").click(function() {
//     $(".sign").addClass("sign-inactive");
//     $(".login").addClass("login-active").removeClass("login-inactive")
// });
// $(".create").click(function() {
//     $(".login").addClass("login-inactive");
//     $(".sign").addClass("sign-active").removeClass("sign-inactive")
// });



// $(".close").click(function() {
//     $(".bg").removeClass("bg-active");
// });
// $(".close").click(function() {
//     $(".sign").removeClass("sign-active");
// });.addClass("sign-active");