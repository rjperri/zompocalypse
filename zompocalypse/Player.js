
define([], function () {
	var Player = function(coordinate){
		var player_sheet = new Image();
		player_sheet.src = "img/sheet_characters.png";
		this.player_sheet_coordinate = {x:0,y:1024-32};
		this.player_sheet_size = {height:32,width:32};

		this.up_sheet_number = 0;
		this.up_right_sheet_number = 1;
		this.right_sheet_number = 2;
		this.down_right_sheet_number = 3;
		this.down_sheet_number = 4;
		this.down_left_sheet_number = 5;
		this.left_sheet_number = 6;
		this.up_left_sheet_number = 7;
		this.default_sheet_number = this.down_sheet_number;
		this.sheet_number = this.default_sheet_number;

		this.location = coordinate;

		this.speed = 150; //pixel/ms

		this.update = function(time){
			if(this.moving_up){
				this.location.y-=time*this.speed;
			}
			if(this.moving_down){
				this.location.y+=time*this.speed;
			}
			if(this.moving_left){
				this.location.x-=time*this.speed;
			}
			if(this.moving_right){
				this.location.x+=time*this.speed;
			}
		},

		this.draw = function(context){
			
			if(this.moving_up){
				this.sheet_number = this.up_sheet_number;
			}
			if(this.moving_down){
				this.sheet_number = this.down_sheet_number;
			}
			if(this.moving_left){
				this.sheet_number = this.left_sheet_number;
			}
			if(this.moving_right){
				this.sheet_number = this.right_sheet_number;
			}

			if(this.moving_up && this.moving_right){
				this.sheet_number = this.up_right_sheet_number;
			}
			if(this.moving_down && this.moving_right){
				this.sheet_number = this.down_right_sheet_number;
			}
			if(this.moving_left && this.moving_down){
				this.sheet_number = this.down_left_sheet_number;
			}
			if(this.moving_left && this.moving_up){
				this.sheet_number = this.up_left_sheet_number;
			}



			var current_coordinate = {
				x:this.player_sheet_coordinate.x+this.player_sheet_size.width*2*this.sheet_number,
				y:this.player_sheet_coordinate.y
			}
			context.drawImage(player_sheet,
							  current_coordinate.x,
							  current_coordinate.y,
							  this.player_sheet_size.width,
							  this.player_sheet_size.height,
							  this.location.x,
							  this.location.y,
							  32,32);

			//context.drawImage(link,this.location.x,this.location.y);
		}
	}
	return Player;
});
