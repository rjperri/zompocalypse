
define([], function () {
    var Map = function(size, location, objects){

		var object1 = {
			location:{x:80,y:50},
			size:{height:100, width:100},
			draw:function(context){
			  context.beginPath();
			  context.rect(this.location.x,this.location.y,this.size.width,this.size.height);//context.rect(188, 50, 200, 100);
			  context.fillStyle = 'red';
			  context.fill();
			  context.lineWidth = 2;
			  context.strokeStyle = 'black';
			  context.stroke();
			}
		}

		var object2 = {
			location:{x:100,y:500},
			size:{height:1000, width:1000},
			draw:function(context){
			  context.beginPath();
			  context.rect(this.location.x,this.location.y,this.size.width,this.size.height);//context.rect(188, 50, 200, 100);
			  context.fillStyle = 'red';
			  context.fill();
			  context.lineWidth = 2;
			  context.strokeStyle = 'black';
			  context.stroke();
			}
		}

		objects.push(object1);
		objects.push(object2);

        this.update = function(time){
        };

        this.draw = function(context, point, canvasSize){
			
            context.save();
			context.translate( (location.x - point.x) + (canvasSize.height/2) , (location.y - point.y) + (canvasSize.width/2) );
			context.beginPath();
            context.strokeStyle = 'teal';
            context.lineWidth = 5;
            context.moveTo(location.x,location.y);
            context.lineTo(location.x + size.height,location.y);
            context.lineTo(location.x + size.height,location.y + size.width);
            context.lineTo(location.x,location.y + size.width);
            context.lineTo(location.x,location.y);
            context.stroke();
            for(var i=0; i<objects.length; i++){
				objects[i].draw(context);
			}
            context.restore();

        };
    }
    return Map;
});
