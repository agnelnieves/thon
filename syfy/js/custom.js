// Shorthand for $( document ).ready()
$(function() {
    //Initiates Wow effects
    new WOW().init();

    //Calls the class group related to the modaal gallery
    $('.portfolio-gallery').modaal({
        type: 'image'
    });

    //Calls Typed element id
    $(function() {
        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            startDelay: 1000,
            loop: true,
            loopCount: false,
            typeSpeed: 100,
            backSpeed: -2
        });

    });
});
