$(document).ready(function () {
    const mainCircleRadius = $(document).width() / 2.1;

    let canvas = document.getElementById("shapes");
    let ctx = canvas.getContext("2d");
    ctx.canvas.width = $(document).width();
    ctx.canvas.height = $(document).height();

    let camera = {};
    camera.x = 0;
    camera.y = 0;
    // let scale = 1;
    let obj = [];

    let t = {};
    t.angle = Math.random() * Math.PI * 2; //start angle1
    t.radius = mainCircleRadius;

    t.SquareA_Point_x1 = Math.cos(t.angle) * t.radius; // Square A start position x1
    t.SquareA_Point_y1 = Math.sin(t.angle) * t.radius; // Square A start position y1
    t.SquareA_Point_x2 = Math.cos(-t.angle) * t.radius; // Square A start position x2
    t.SquareA_Point_y2 = Math.sin(-t.angle) * t.radius; // Square A start position y2

    t.circumference = t.radius * 2 * Math.PI; //curcumfrence
    t.duration = 500000;
    t.start = Date.now();

    obj.push(t);

    function update() {
        for (var i = 0; i < obj.length; i++) {
            var delta = Date.now() - obj[i].start;
            obj.start = Date.now();
            var vector = obj[i].circumference / obj[i].duration;
            var angleSquareA = (vector * delta) / obj[i].radius;

            obj[i].SquareA_Point_x1 = obj[i].radius * Math.cos(angleSquareA);
            obj[i].SquareA_Point_y1 = obj[i].radius * Math.sin(angleSquareA);
            obj[i].SquareA_Point_x2 = obj[i].radius * Math.cos(-angleSquareA);
            obj[i].SquareA_Point_y2 = obj[i].radius * Math.sin(-angleSquareA);
        }
    }

    function draw() {
        update();

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(
            0 - (camera.x - canvas.width / 2),
            0 - (camera.y - canvas.height / 2)
        );
        ctx.scale(1, 1);
        ctx.strokeStyle = "rgba(0,0,0,0.3)";
        ctx.lineWidth = 1;
        ctx.setLineDash([1, 1]);

        for (var i = 0; i < obj.length; i++) {
            ctx.setLineDash([1, 1]);
            ctx.beginPath();
            ctx.moveTo(obj[i].SquareA_Point_x1, obj[i].SquareA_Point_y1);
            ctx.lineTo(obj[i].SquareA_Point_y2, obj[i].SquareA_Point_x2);
            ctx.lineTo(-obj[i].SquareA_Point_x1, -obj[i].SquareA_Point_y1);
            ctx.lineTo(-obj[i].SquareA_Point_y2, -obj[i].SquareA_Point_x2);
            ctx.closePath();
            ctx.stroke();
            // ctx.setLineDash([]);

            ctx.scale(-1, 1);
            ctx.beginPath();
            ctx.moveTo(obj[i].SquareA_Point_x1, obj[i].SquareA_Point_y1);
            ctx.lineTo(obj[i].SquareA_Point_y2, obj[i].SquareA_Point_x2);
            ctx.lineTo(-obj[i].SquareA_Point_x1, -obj[i].SquareA_Point_y1);
            ctx.lineTo(-obj[i].SquareA_Point_y2, -obj[i].SquareA_Point_x2);
            ctx.closePath();
            ctx.stroke();
        }

        // Static shapes
        ctx.scale(-1, -1);

        ctx.beginPath();
        ctx.arc(0, 0, mainCircleRadius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, mainCircleRadius - 50, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, mainCircleRadius - 300, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, mainCircleRadius - 450, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, mainCircleRadius - 600, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 1, 0, Math.PI * 2);
        ctx.stroke();

        // center diamond
        ctx.beginPath();
        ctx.moveTo(150, 0);
        ctx.lineTo(0, 150);
        ctx.lineTo(-150, 0);
        ctx.lineTo(0, -150);
        ctx.closePath();
        ctx.stroke();

        // center diamond
        ctx.beginPath();
        ctx.moveTo(250, 0);
        ctx.lineTo(0, 100);
        ctx.lineTo(-250, 0);
        ctx.lineTo(0, -100);
        ctx.closePath();
        ctx.stroke();

        // center diamond top
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(0, 400);
        ctx.lineTo(-100, 100);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.stroke();

        // center diamond bottom
        ctx.beginPath();
        ctx.moveTo(100, -100);
        ctx.lineTo(0, 0);
        ctx.lineTo(-100, -100);
        ctx.lineTo(0, -400);
        ctx.closePath();
        ctx.stroke();

        ctx.restore();
        requestAnimationFrame(draw);
    }

    draw();
});
