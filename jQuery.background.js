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
            'image' : '',
            'video' : '',
            'imageID': 'backgroundImage',
            'videoID': 'backgroundVideo'
        }, options);

        //////////////////////
        // Helper Functions //
        //////////////////////
        var fullscreen = function() {
            /////////////////////////////////////////
            // Get rid of those darned black bars! //
            /////////////////////////////////////////
            var $video = $this.find("video");

            var windowHeight = $(window).height();
            var windowWidth = $(window).width();
            var windowRatio = windowWidth / windowHeight;
            
            var videoHeight = $video.height();
            var videoWidth = $video.width();
            var videoRatio = videoWidth / videoHeight;

            if ( windowRatio < videoRatio ) {
                $video.css({
                   height: "100%",
                   width: "auto"
                });
            } else {
                $video.css({
                    height: "auto",
                    width: "100%"
                });
            }
        };


        if ( $this.length > 0 ) {
	        /////////////////////////////////////////////////////////////
	        // Make sure that our parent element is hogging the screen //
	        /////////////////////////////////////////////////////////////
	        $("body").css({ 'margin': 0 });
	        $this.css({ 'display': 'block', 'height': '100%', 'left': 0, 'overflow': 'hidden', 'position': 'absolute', 'top': 0, 'width': '100%', 'z-index': -100 });
	
	
	        if ( typeof window.orientation === "undefined"
	            && !!document.createElement('video').canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') ) {
	            //////////////////////////////////////////////////////////
	            // If we're not mobile and support video, use the Video //
	            //////////////////////////////////////////////////////////
	            $this.html("<video autoplay=\"true\" loop=\"true\" id=\"" + settings.videoID + "\"><source src=\"" + settings.video + "\" /></video>");
	            
	            var $video = $("#" + settings.videoID);
	            
	            /////////////////////////////////////
	            // Events for All of The Scenarios //
	            /////////////////////////////////////
	            $video.on("loadedmetadata", function() {
		        	fullscreen();
	            });
	            
	            $(window).focus(function() {
	                $video[0].play();
	            });
	
	            $(window).blur(function() {
	                $video[0].pause();
	            });
	
	            $(window).resize(function() {
	                fullscreen();
	            });
	        } else {
	            ////////////////////////////////////////////////////////////
	            // We're Mobile or an older browser, so fallback to Image //
	            ////////////////////////////////////////////////////////////
	            $this.css({ 'background-image': 'url(' + settings.image + ')', 'background-size': 'cover', 'background-position': 'center center' });
	        }
	    } else {
		    console.warn("jQuery.background(): The element you tried to use for a background doesn't exist.");
	    }
    };
})(jQuery);