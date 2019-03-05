$(function () {

    // var x = $('body').width();
    //     if( x < 800){
    //         $('#topnav').hide();
    //         $('#botnav').hide();
    //         $('#leftnav').hide();
    //         $('#rightnav').hide();
    //
    //
    //     }

    // top pannel

    $('#topnav').click(function () {

        if( $('#contact').is(":visible")){
            $('#contact').hide("slide", { direction: "down" }, 500);
        }

        if( $('#gallery').is(":visible")){
            $('#gallery').hide("slide", { direction: "left" }, 500);
        }

        if( $('#offer').is(":visible")){
            $('#offer').hide("slide", { direction: "right" }, 500);
        }

        if( $('#theme').is(":visible")){
            $('#theme').hide("slide", { direction: "up" }, 500);
        }
        else{
            $('#theme').show("slide", { direction: "up" }, 500);
        }

        //Slider for maintheme
        var width = $ ('.slide').width();
        var animationSpeed = 12000;
        var pause = 500;
        var currentSlide = 1;

        //cache DOM elements
        var $slider = $('#slider');
        var $slideContainer = $('.slides', $slider);
        var $slides = $('.slide', $slider);

        var interval;

        function startSlider() {

            interval = setInterval(function() {

                while(currentSlide < 4) {
                    ++currentSlide;
                    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() { });
                }

                while(currentSlide > 1) {
                    --currentSlide;
                    $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function() { });
                }



            }, pause);
        }
        function pauseSlider() {
            clearInterval(interval);
        }

        $slideContainer
            .on('mouseenter', pauseSlider)
            .on('mouseleave', startSlider);

        startSlider();

    })

    // bot pannel


    $("#botnav").click(function () {

        if( $('#theme').is(":visible")){
            $('#theme').hide("slide", { direction: "up" }, 500);
        }

        if( $('#gallery').is(":visible")){
            $('#gallery').hide("slide", { direction: "left" }, 500);
        }

        if( $('#offer').is(":visible")){
            $('#offer').hide("slide", { direction: "right" }, 500);
        }

        if( $('#contact').is(":visible")){
            $('#contact').hide("slide", { direction: "down" }, 500);
        }
        else{
            $('#contact').show("slide", { direction: "down" }, 500);
        }

    });

    //left pannel
    $("#leftnav").click(function () {

        if( $('#theme').is(":visible")){
            $('#theme').hide("slide", { direction: "up" }, 500);
        }

        if( $('#contact').is(":visible")){
            $('#contact').hide("slide", { direction: "down" }, 500);
        }

        if( $('#offer').is(":visible")){
            $('#offer').hide("slide", { direction: "right" }, 500);
        }

        if( $('#gallery').is(":visible")){
            $('#gallery').hide("slide", { direction: "left" }, 500);
        }
        else{
            $('#gallery').show("slide", { direction: "left" }, 500);
        }

    });

    // script created by Konstantin M from codepen.io
    (function() {
        var $lightbox = $("<div class='lightbox'></div>");
        var $img = $("<img>");
        var $caption = $("<p class='caption'></p>");

        // Add image and caption to lightbox

        $lightbox
            .append($img)
            .append($caption);

        // Add lighbox to document

        $('body').append($lightbox);

        $('.lightbox-gallery img').click(function(e) {
            e.preventDefault();

            // Get image link and description
            var src = $(this).attr("src");
            var cap = $(this).attr("alt");

            // Add data to lighbox

            $img.attr('src', src);
            $caption.text(cap);

            // Show lightbox

            $lightbox.fadeIn('fast');

            $lightbox.click(function() {
                $lightbox.fadeOut('fast');
            });
        });

    }());

    // right pannel
    $("#rightnav").click(function () {

        if( $('#theme').is(":visible")){
            $('#theme').hide("slide", { direction: "up" }, 500);
        }

        if( $('#contact').is(":visible")){
            $('#contact').hide("slide", { direction: "down" }, 500);
        }

        if( $('#gallery').is(":visible")){
            $('#gallery').hide("slide", { direction: "left" }, 500);
        }

        if( $('#offer').is(":visible")){
            $('#offer').hide("slide", { direction: "right" }, 500);
        }
        else{
            $('#offer').toggle("slide", { direction: "right" }, 500);
        }

    });



})



function timer() {

    var dzisiaj = new Date();

    var rok = dzisiaj.getFullYear();

    document.getElementById("zegar").innerHTML = "&copy" +  rok;

    setTimeout("timer()", 1000);

}

window.i = 0;
function callback() {
    i++;



}

