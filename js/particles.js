//https://github.com/simeydotme/sparticles
$(function () {
    let sparticles = new Sparticles(
        $("#sparticles-container")[0],
        {
            composition: "source-over",
            count: 1000,
            speed: 5,
            parallax: 2,
            direction: 225,
            xVariance: 2,
            yVariance: 2,
            rotate: true,
            rotation: 1,
            alphaSpeed: 10,
            alphaVariance: 1,
            minAlpha: 0,
            maxAlpha: 1,
            minSize: 1,
            maxSize: 10,
            style: "fill",
            bounce: false,
            drift: 50,
            glow: 10,
            twinkle: false,
            color: ["#000000"],
            shape: "circle",
            imageUrl: "",
        },
        $(document).width(),
        $(window).height()
    );
});