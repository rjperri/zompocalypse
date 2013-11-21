define(["Player", "Camera", "Map", "PlayerController"], function(Player, Camera, Map, PlayerController) {
    var Game = function(dimensions){
        
        var player1 = new Player({x:50,y:30});


        var player2 = new Player({x:500,y:60});


        PlayerController(document, player1);
        this.camera = new Camera(player1);

        var gameObjects = new Array();
        gameObjects.push(player1);
        gameObjects.push(player2);


        var pattern = new Image;
        pattern.ready = false;
        pattern.src = "img/floor.png";
        pattern.onload = function () {
            pattern.ready = true;
        };
        
        var map = new Map({height:5000, width:8000}, {x:0, y:0}, gameObjects);

        this.draw = function(context, canvasSize){
            //draw the background:
            context.beginPath();
            context.lineWidth = context.canvas.width*2;
            context.strokeStyle = context.createPattern(pattern, 'repeat');
            context.moveTo(0, 0);
            context.lineTo(0, context.canvas.height );
            context.stroke();

            //draw the map for a certain location(the player's location)
            map.draw(context, this.camera.location, canvasSize);
            
        }
        
        this.update = function(seconds){
            player1.update(seconds);
            this.camera.update(seconds);
        }
    };
    return Game;
});
