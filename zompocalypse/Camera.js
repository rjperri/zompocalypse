define([], function () {
    var Camera = function(object){
        this.x = object.location.x;
        this.y = object.location.y;

        this.location = object.location;


        this.scale = 1;
        this.following = object;
        this.width = 1200;
        this.height = 600;

        this.movingUp = false;
        this.movingRight = false;
        this.movingLeft = false;
        this.movingDown = false;
        this.zoomingOut = false;
        
        this.panInfo = {
            panning:false,
            theta:0,
            panSpeed:Camera.defaultPanSpeed,
            panDistance:0
        };
        
        this.processAction = function(action){
            if(action == 'MOVE_UP'){
                this.movingUp = true;
            }else if(action == 'MOVE_DOWN'){
                this.movingDown = true;
            }else if(action == 'MOVE_RIGHT'){
                this.movingRight = true;
            }else if(action == 'MOVE_LEFT'){
                this.movingLeft = true;
            }else if(action == 'UN_MOVE_UP'){
                this.movingUp = false;
            }else if(action == 'UN_MOVE_DOWN'){
                this.movingDown = false;
            }else if(action == 'UN_MOVE_RIGHT'){
                this.movingRight = false;
            }else if(action == 'UN_MOVE_LEFT'){
                this.movingLeft = false;
            }else if(action == 'ZOOM_OUT'){
                this.zoomingOut = true;
            }else if(action == 'ZOOM_IN'){
                this.zoomingOut = false;
            }
        }

        this.update = function(seconds){
            
            if(this.panning){
                var dx = seconds*this.panInfo.panSpeed*Math.cos(this.angle);
                var dy = seconds*this.panInfo.panSpeed*Math.sin(this.angle);
                
                this.location.x = this.location.x + dx;
                this.location.y = this.location.y + dy;
                
                this.panInfo.pixelsTraveled += seconds*this.panInfo.panSpeed;
                if(this.panInfo.pixelsTraveled >= this.panInfo.panDistance){
                    this.panInfo.panning = false;
                }
            //TODO:add code here
            }else{
                this.x = -(this.following.location.x + this.width/2);
                this.y = -(this.following.location.y + this.height/2);
            }
            if(this.movingUp){
                this.moveUp(seconds);
            }
            if(this.movingDown){
                this.moveDown(seconds);
            }
            if(this.movingLeft){
                this.moveLeft(seconds);
            }
            if(this.movingRight){
                this.moveRight(seconds);
            }
            if(this.zoomingOut){
                this.scale -= Camera.zoomSpeed*seconds;
                if(this.scale < Camera.zoomLimit){
                    this.scale = Camera.zoomLimit;
                }
            }else{
                this.scale += Camera.zoomSpeed*seconds;
                if(this.scale > 1){
                    this.scale = 1;
                }
            }
            
        };
        
        /*
         * This function pans the camera to a certain x&y
         */
        this.panTo = function(x,y, speed){
            if(!speed){
                speed = Camera.defaultPanSpeed;
            }
            
            this.panInfo.panning = true;
            this.panInfo.panSpeed = speed;
            
            var dx = x - this.x;
            var dy = y - this.y;
            
            this.panInfo.panDistance = Math.sqrt( Math.pow(dx,2)+Math.pow(dy,2) );
            this.panInfo.theta = Math.atan(dy/dx);
        }
        
        this.moveUp = function(seconds){
            this.y += seconds*Camera.speed;
        }
        this.moveDown = function(seconds){
            this.y -= seconds*Camera.speed;
        }
        this.moveLeft = function(seconds){
            this.x += seconds*Camera.speed;
        }
        this.moveRight = function(seconds){
            this.x -= seconds*Camera.speed;
        }
        
    };
    Camera.speed = 200;//pixels per second
    Camera.zoomSpeed = 5; //pixels per second
    Camera.zoomLimit = .25; //pixels per second
    Camera.defaultPanSpeed = 1000; //pixels per second
    return Camera;
});