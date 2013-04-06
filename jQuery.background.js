/**
 *
 * jQuery.backgrounds.js | Animated Backgrounds!
 * Copyright 2013 Kyle Hotchkiss
 * Released under the GPL
 *
 */

(function($) {
    $.fn.background = function( options ) {
        ///////////////////
        // Initalization //
        ///////////////////
        var $this = $(this);

        var settings = $.extend( {
            'video' : '',
            'image' : ''
        }, options);

        //////////////////////
        // Helper Functions //
        //////////////////////
        var fullscreen = function() {
            /////////////////////////////////////////
            // Get rid of those darned black bars! //
            /////////////////////////////////////////

            // Future: messure container instead of window

            var windowHeight = $(window).height();
            var windowWidth = $(window).width();
            var videoHeight = $this.find("video").height();
            var videoWidth = $this.find("video").width();

            if ( videoHeight < windowHeight ) {
                $this.find("video").css({
                   height: "100%",
                   width: "auto"
                });
            } else {
                $this.find("video").css({
                    height: "auto",
                    width: "100%"
                });
            }
        };

        /////////////////////////////////////////////////////////////
        // Make sure that our parent element is hogging the screen //
        /////////////////////////////////////////////////////////////
        $("body").css({ 'margin': 0 });
        $this.css({ 'display': 'block', 'height': '100%', 'left': 0, 'overflow': 'hidden', 'position': 'absolute', 'top': 0, 'width': '100%', 'z-index': -100 });


        if ( typeof window.orientation === "undefined"
            && !!document.createElement('video').canPlayType('video/webm; codecs="vp8, vorbis"') ) {
            //////////////////////////////////////////////////////////
            // If we're not mobile and support video, use the Video //
            //////////////////////////////////////////////////////////
            $this.html("<video autoplay=\"true\" loop=\"true\"><source src=\"" + settings.video + "\" type=\"video/webm\" /></video>")

            fullscreen();

            ////////////////////////////////////////////
            // Pause and Play for Window focus events //
            ////////////////////////////////////////////
            $(window).focus(function() {
                $this.find("video")[0].play();
            });

            $(window).blur(function() {
                $this.find("video")[0].pause();
            });


            /////////////////////////////////////////
            // Window resize events for Fullscreen //
            /////////////////////////////////////////
            $(window).resize(function() {
                fullscreen();
            });
        } else {
            ////////////////////////////////////////////////////////////
            // We're Mobile or an older browser, so fallback to Image //
            ////////////////////////////////////////////////////////////
            $this.css({ 'background-image': 'url(' + settings.image + ')', 'background-size': 'cover', 'background-position': 'center center' });
        }
    };
})(jQuery);