require(['Game', 'jquery'], function (Game, $) {

    $(function(){
        var canvas = document.getElementById('some_canvas');
        var context = canvas.getContext('2d');

        var game = new Game({height:canvas.height, width:canvas.width});

        var then = new Date();
        var main = function () {
            var now = Date.now();
            var delta = now - then;

            game.update(delta / 1000);
            context.canvas.width  = window.innerWidth;
            context.canvas.height = window.innerHeight;
            game.draw(context, {height:context.canvas.width, width:context.canvas.height});

            then = now;
        };

        setInterval(main, 1);
    });

});