//https://github.com/simeydotme/sparticles
$(function () {
    let sparticles = new Sparticles(
        $("#sparticles-container")[0],
        {
            composition: "source-over",
            count: 100,
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
            maxSize: 5,
            style: "both",
            bounce: false,
            drift: 5,
            glow: 2,
            twinkle: false,
            color: ["#ffffff"],
            shape: "circle",
            imageUrl: "",
        },
        $(document).width() - 15,
        $(window).height() - 20
    );
});