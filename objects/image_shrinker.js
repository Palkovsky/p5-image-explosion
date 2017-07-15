var ImageShrinker = function(img, pos){


	this.img = img;
	this.width = this.img.width;
	this.height = this.img.height;
	this.pos = pos;

	var interval;

	this.shrink = function(on_finish){

		var self = this;

		interval = setInterval(function(){
			self.width -= 5;
			self.height -= 5;
			if(self.width <= 0 || self.height <= 0){
				on_finish();
				clearInterval(interval);
			}
			console.log("A");
		}, 3);
	}

	this.draw = function(){
		if(this.width > 0 && this.height > 0){
			image(img, imageCenter.x - this.width/2, imageCenter.y - this.height/2, this.width, this.height);
		}
	}
}