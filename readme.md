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
It only supports WebM. It's more or less a political move of mine. I'll add validation in one of these days, maybe.

You shouldn't be using high-quality videos... here's an example ffmpeg encoding command that will keep a file small:

    ffmpeg -t 00:00:30 -i movie.MOV -an -pass 1 -codec:v libvpx -b:v 650k -codec:a libvorbis -b:a 100k -s 640x360 -f webm -y /dev/null && 
    ffmpeg -t 00:00:30 -i movie.MOV -an -pass 2 -codec:v libvpx -b:v 650k -codec:a libvorbis -b:a 100k -s 640x360 -y background.webm
    
You're distracting a user enough with a video, don't do them the dishonor of having to watch a video they have no control over buffer

## Negative Effects
[Rumor has it that Video decreases conversion rates on websites](https://twitter.com/JohnBowmanJr/status/320221377045082112). So if you have a website where you expect the user to do anything, don't use this script. Or if you have an online store. Or if you make money of your website. Just... don't. Videos are cool and all but save yourself the hassle.
