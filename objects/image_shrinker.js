var ImageShrinker = function(img, pos){


	this.img = img;
	this.width = this.img.width;
	this.height = this.img.height;
	this.pos = pos;

	var interval;

	this.shrink = function(on_finish, shrink_value){

		if(shrink_value === undefined){
			shrink_value = 5;
		}

		var self = this;
		var widthHeightRatio = this.width/this.height;

		interval = setInterval(function(){
			self.width -= shrink_value * widthHeightRatio;
			self.height -= shrink_value;
			if(self.width <= 0 || self.height <= 0){
				on_finish();
				clearInterval(interval);
			}
		}, 3);
	}

	this.draw = function(){
		if(this.width > 0 && this.height > 0){
			image(img, imageCenter.x - this.width/2, imageCenter.y - this.height/2, this.width, this.height);
		}
	}

	this.reload = function(){
		
	}
}