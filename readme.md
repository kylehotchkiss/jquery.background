# jQuery.Background
This library lets you set a video as a background for your website. If you're new to web development, please don't do this. I made this because you have to account for a few conditions to verify that it'll actually work and not set your visitors computers on fire.

This library disables the effect if the user is on a mobile device, is using a browser that doesn't support WebM (supposedly the most computationally efficient codec supported by browsers), or if the window/tab is unfocused.

Gracefully degrades to static image in all unsupported instances.

[Example On My Website](http://kylehotchkiss.com/)

## Usage

    $(".element").background({
    	image: "backup image URL",
    	video: "WebM video URL"
    });

## Gotchas
It only supports MP4. I thought about WebM a bit, but sorry, WebM is hype for now. It's by no means any more efficient of a format, as I once thought.

Check out the [Dive into HTML5](http://diveintohtml5.info/video.html#handbrake-gui) tutorial on Video Encoding. I set the quality to 1500kbps which saves a considerable amount of bandwidth. I also disable all the sound channels and dual-pass the video. 
    
You're distracting a user enough with a video, don't do them the dishonor of having to watch a video they have no control over buffer. 

## Negative Effects
[Rumor has it that Video decreases conversion rates on websites](https://twitter.com/JohnBowmanJr/status/320221377045082112). So if you have a website where you expect the user to do anything, don't use this script. Or if you have an online store. Or if you make money of your website. Just... don't. Videos are cool and all but save yourself the hassle.
