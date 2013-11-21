
define([], function () {
	var PlayerController = function(document, ship){
		var controlScheme = {
			up:87,//w
			down:83,//s
			left:65,//a
			right:68//d
		}

		document.addEventListener('keydown', function(event){
			if(event.keyCode == controlScheme.up){
				ship.moving_up = true;
			}else if(event.keyCode == controlScheme.down){
				ship.moving_down = true;
			}else if(event.keyCode == controlScheme.left){
				ship.moving_left = true;
			}else if(event.keyCode == controlScheme.right){
				ship.moving_right = true;
			}
		});

		document.addEventListener('keyup', function(event){
			if(event.keyCode == controlScheme.up){
				ship.moving_up = false;
			}else if(event.keyCode == controlScheme.down){
				ship.moving_down = false;
			}else if(event.keyCode == controlScheme.left){
				ship.moving_left = false;
			}else if(event.keyCode == controlScheme.right){
				ship.moving_right = false;
			}
		});
	}
	return PlayerController;
});